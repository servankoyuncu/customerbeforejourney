-- Lead-Erfassung auf der Landingpage (vor der Kalenderauswahl) und die
-- Kontaktfelder, die appointments braucht, um die 12h-Erinnerung per SMS
-- zu verschicken. Kein Token nötig, da das der allererste Kontaktpunkt ist,
-- bevor überhaupt ein appointment existiert.

create table leads (
  id                     uuid primary key default gen_random_uuid(),
  first_name             text not null,
  last_name              text not null,
  phone                  text not null,
  email                  text not null,
  postal_code            text not null,
  matched_appointment_id uuid references appointments(id),
  created_at             timestamptz not null default now()
);

alter table leads enable row level security;

alter table appointments add column client_phone text;
alter table appointments add column client_email text;
alter table appointments add column client_postal_code text;
alter table appointments add column lead_id uuid references leads(id);
alter table appointments add column reminder_sent_at timestamptz;

create or replace function submit_lead(
  p_first_name text,
  p_last_name text,
  p_phone text,
  p_email text,
  p_postal_code text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if trim(p_first_name) = '' or trim(p_last_name) = '' or trim(p_phone) = '' or trim(p_postal_code) = '' then
    raise exception 'missing_fields' using errcode = 'P0003';
  end if;

  if p_email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then
    raise exception 'invalid_email' using errcode = 'P0004';
  end if;

  insert into leads (first_name, last_name, phone, email, postal_code)
  values (trim(p_first_name), trim(p_last_name), trim(p_phone), trim(lower(p_email)), trim(p_postal_code));
end;
$$;

grant execute on function submit_lead(text, text, text, text, text) to anon;
