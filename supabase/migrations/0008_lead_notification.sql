-- Benachrichtigt David und shero@marken-ding.com per E-Mail, sobald ein Lead
-- das Formular auf der Landingpage absendet. Gleiches Muster wie
-- notify_advisor_of_answer (0004): pg_net direkt aus Postgres, Resend-Key aus
-- Vault, kein Edge-Function-Umweg nötig.

create or replace function notify_new_lead()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_api_key text;
begin
  select decrypted_secret into v_api_key
  from vault.decrypted_secrets
  where name = 'resend_api_key'
  limit 1;

  if v_api_key is null then
    return new;
  end if;

  perform net.http_post(
    url := 'https://api.resend.com/emails',
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' || v_api_key,
      'Content-Type', 'application/json'
    ),
    body := jsonb_build_object(
      'from', 'Terminvorbereitung <contact@marken-ding.com>',
      'to', jsonb_build_array('shero@marken-ding.com', 'david@frenkelconsulting.com'),
      'subject', 'Neuer Lead: ' || new.first_name || ' ' || new.last_name,
      'html',
        '<p>Neuer Lead über die Landingpage:</p>' ||
        '<p><strong>Name:</strong> ' || new.first_name || ' ' || new.last_name || '</p>' ||
        '<p><strong>Telefon:</strong> ' || new.phone || '</p>' ||
        '<p><strong>E-Mail:</strong> ' || new.email || '</p>' ||
        '<p><strong>PLZ:</strong> ' || new.postal_code || '</p>'
    )
  );

  return new;
end;
$$;

drop trigger if exists leads_notify_on_insert on leads;

create trigger leads_notify_on_insert
after insert on leads
for each row
execute function notify_new_lead();
