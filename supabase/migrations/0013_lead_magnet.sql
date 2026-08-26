-- Lead-Magnet-Anmeldungen auf der Landingpage.
-- E-Mail-Adressen werden separat von den vollständigen Lead-Formularen erfasst,
-- um Besuchern, die noch nicht bereit sind einen Termin zu buchen, eine
-- Checkliste anbieten zu können.

create table lead_magnet_requests (
  id         uuid primary key default gen_random_uuid(),
  email      text not null,
  created_at timestamptz not null default now()
);

alter table lead_magnet_requests enable row level security;

create or replace function submit_lead_magnet(
  p_email text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if trim(p_email) = '' or p_email !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' then
    raise exception 'invalid_email' using errcode = 'P0004';
  end if;

  insert into lead_magnet_requests (email)
  values (trim(lower(p_email)));
end;
$$;

grant execute on function submit_lead_magnet(text) to anon;
