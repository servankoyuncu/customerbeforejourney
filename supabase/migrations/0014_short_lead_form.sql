-- Kurzes Lead-Formular: nur noch Name, Telefon, PLZ. E-Mail entfällt
-- (die Terminerinnerung liest client_email aus appointments, das der
-- Kunde im Google-Booking selbst angibt). Terminart ebenfalls weg — die
-- Spalte behält ihren Default 'online'.

alter table leads alter column email drop not null;

drop function if exists submit_lead(text, text, text, text, text, text);
drop function if exists submit_lead(text, text, text, text, text);

create or replace function submit_lead(
  p_first_name text,
  p_last_name text,
  p_phone text,
  p_postal_code text
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

  v_phone_digits := regexp_replace(p_phone, '\D', '', 'g');
  if length(v_phone_digits) < 7 or length(v_phone_digits) > 15 then
    raise exception 'invalid_phone' using errcode = 'P0005';
  end if;

  if trim(p_postal_code) !~ '^[0-9]{4}$' then
    raise exception 'invalid_postal_code' using errcode = 'P0006';
  end if;

  insert into leads (first_name, last_name, phone, postal_code)
  values (
    trim(p_first_name), trim(p_last_name), trim(p_phone),
    trim(p_postal_code)
  );
end;
$$;

grant execute on function submit_lead(text, text, text, text) to anon;
