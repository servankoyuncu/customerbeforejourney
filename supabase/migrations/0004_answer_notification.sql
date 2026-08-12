-- Benachrichtigt den Berater per E-Mail, sobald der Kunde die Frage aus Screen 6
-- beantwortet und mit "Weiter" bestätigt (nicht bei jedem Antippen einer Option).
-- Nutzt pg_net für den ausgehenden HTTP-Call an Resend, damit keine separate
-- Edge Function deployt werden muss. Der Resend API-Key liegt NICHT hier im
-- Code, sondern in Supabase Vault (siehe Anleitung im Chat) und wird zur
-- Laufzeit über vault.decrypted_secrets nachgeschlagen.

create extension if not exists pg_net;

create or replace function notify_advisor_of_answer()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_advisor_name  text;
  v_advisor_email text;
  v_client_name   text;
  v_starts_at     timestamptz;
  v_api_key       text;
begin
  select ad.name, ad.email, ap.client_name, ap.starts_at
    into v_advisor_name, v_advisor_email, v_client_name, v_starts_at
  from appointments ap
  join advisors ad on ad.id = ap.advisor_id
  where ap.id = new.appointment_id;

  -- Kein Versand, solange kein E-Mail-Feld beim Berater hinterlegt ist.
  if v_advisor_email is null or v_advisor_email = '' then
    return new;
  end if;

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
      'to', jsonb_build_array(v_advisor_email),
      'subject', 'Neue Rückmeldung von ' || v_client_name || ' vor eurem Termin',
      'html',
        '<p>Hallo ' || v_advisor_name || ',</p>' ||
        '<p><strong>' || v_client_name || '</strong> hat gerade die Terminvorbereitung ausgefüllt.</p>' ||
        '<p><strong>Wichtigstes Anliegen:</strong> ' || new.answer || '</p>' ||
        '<p>Termin: ' || to_char(v_starts_at, 'DD.MM.YYYY "um" HH24:MI') || ' Uhr</p>'
    )
  );

  return new;
end;
$$;

drop trigger if exists prep_responses_notify_advisor on prep_responses;

create trigger prep_responses_notify_advisor
after insert or update on prep_responses
for each row
when (new.question_key = 'wichtigstes_anliegen')
execute function notify_advisor_of_answer();
