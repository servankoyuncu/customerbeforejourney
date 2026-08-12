-- Vorbereitungs-Link in der 12h-Erinnerung auf die neue eigene Domain
-- umstellen (statt der Netlify-Subdomain).

create or replace function send_appointment_reminders()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_api_key text;
  v_prep_link text;
  r record;
begin
  select decrypted_secret into v_api_key
  from vault.decrypted_secrets
  where name = 'resend_api_key'
  limit 1;

  if v_api_key is null then
    return;
  end if;

  for r in
    select a.id, a.token, a.client_name, a.client_email, a.starts_at, ad.name as advisor_name
    from appointments a
    join advisors ad on ad.id = a.advisor_id
    where a.reminder_sent_at is null
      and a.client_email is not null
      and a.starts_at between now() + interval '11 hours' and now() + interval '13 hours'
  loop
    v_prep_link := 'https://insufinance.com/p/' || r.token;

    perform net.http_post(
      url := 'https://api.resend.com/emails',
      headers := jsonb_build_object('Authorization', 'Bearer ' || v_api_key, 'Content-Type', 'application/json'),
      body := jsonb_build_object(
        'from', 'Terminvorbereitung <contact@marken-ding.com>',
        'to', jsonb_build_array(r.client_email),
        'subject', 'Ihre Terminvorbereitung',
        'html',
          '<p>Hallo ' || r.client_name || ',</p>' ||
          '<p>Ihr Termin mit ' || r.advisor_name || ' steht bald an. In 3 Minuten sind Sie bereit:</p>' ||
          '<p><a href="' || v_prep_link || '">' || v_prep_link || '</a></p>'
      )
    );

    perform net.http_post(
      url := 'https://api.resend.com/emails',
      headers := jsonb_build_object('Authorization', 'Bearer ' || v_api_key, 'Content-Type', 'application/json'),
      body := jsonb_build_object(
        'from', 'Terminvorbereitung <contact@marken-ding.com>',
        'to', jsonb_build_array('shero@marken-ding.com', 'david@frenkelconsulting.com'),
        'subject', 'Erinnerung verschickt: ' || r.client_name,
        'html',
          '<p>Die Terminvorbereitungs-Erinnerung wurde an ' || r.client_name ||
          ' (' || r.client_email || ') verschickt.</p>' ||
          '<p>Termin: ' || to_char(r.starts_at, 'DD.MM.YYYY "um" HH24:MI') || ' Uhr</p>'
      )
    );

    update appointments set reminder_sent_at = now() where id = r.id;
  end loop;
end;
$$;
