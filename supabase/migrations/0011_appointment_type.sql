-- Erfasst, ob der Lead ein Vor-Ort- oder Online-Gespräch bevorzugt. Fürs
-- Erste rein informativ (fliesst in die Lead-Benachrichtigungsmail an David),
-- beeinflusst noch nicht, welcher Google-Calendar-Link geöffnet wird.

alter table leads add column appointment_type text not null default 'online'
  check (appointment_type in ('vor_ort', 'online'));

create or replace function submit_lead(
  p_first_name text,
  p_last_name text,
  p_phone text,
  p_email text,
  p_postal_code text,
  p_appointment_type text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_phone_digits text;
begin
  if trim(p_first_name) = '' or trim(p_last_name) = '' then
    raise exception 'missing_fields' using errcode = 'P0003';
  end if;

  if p_email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then
    raise exception 'invalid_email' using errcode = 'P0004';
  end if;

  v_phone_digits := regexp_replace(p_phone, '\D', '', 'g');
  if length(v_phone_digits) < 7 or length(v_phone_digits) > 15 then
    raise exception 'invalid_phone' using errcode = 'P0005';
  end if;

  if trim(p_postal_code) !~ '^[0-9]{4}$' then
    raise exception 'invalid_postal_code' using errcode = 'P0006';
  end if;

  if p_appointment_type not in ('vor_ort', 'online') then
    raise exception 'invalid_appointment_type' using errcode = 'P0007';
  end if;

  insert into leads (first_name, last_name, phone, email, postal_code, appointment_type)
  values (
    trim(p_first_name), trim(p_last_name), trim(p_phone),
    trim(lower(p_email)), trim(p_postal_code), p_appointment_type
  );
end;
$$;

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
        '<p><strong>PLZ:</strong> ' || new.postal_code || '</p>' ||
        '<p><strong>Terminwunsch:</strong> ' ||
          (case when new.appointment_type = 'vor_ort' then 'Vor Ort' else 'Online' end) || '</p>'
    )
  );

  return new;
end;
$$;
