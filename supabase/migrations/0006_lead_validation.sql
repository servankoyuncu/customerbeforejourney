-- Serverseitige Format-Validierung für submit_lead, als zweite Absicherung
-- hinter der Client-Validierung im Formular (falls die RPC direkt aufgerufen wird).

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

  insert into leads (first_name, last_name, phone, email, postal_code)
  values (trim(p_first_name), trim(p_last_name), trim(p_phone), trim(lower(p_email)), trim(p_postal_code));
end;
$$;
