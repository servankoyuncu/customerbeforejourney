-- Landingpage-Tracking: Pseudonymisierte Events pro Besucher-Session.
-- Speichert keine PII in den Events, nur Aktionen wie Pageview, Klicks,
-- Scroll-Sichtbarkeit und Formular-Interaktionen. Der Kunde greift nur
-- über SECURITY DEFINER-RPCs zu; die Tabellen bleiben für anon gesperrt.

create table landing_sessions (
  id            uuid primary key default gen_random_uuid(),
  session_token text not null unique,
  referrer      text,
  language      text,
  first_seen    timestamptz not null default now(),
  last_seen     timestamptz not null default now()
);

create table landing_events (
  id            uuid primary key default gen_random_uuid(),
  session_token text not null references landing_sessions(session_token) on delete cascade,
  event_type    text not null check (length(event_type) <= 50),
  payload       jsonb not null default '{}'::jsonb check (length(payload::text) <= 2000),
  created_at    timestamptz not null default now()
);

create index landing_events_session_token_idx on landing_events (session_token);
create index landing_events_created_at_idx on landing_events (created_at);

alter table landing_sessions enable row level security;
alter table landing_events enable row level security;

-- Initialisiert oder aktualisiert eine Landingpage-Session.
create or replace function init_landing_session(
  p_session_token text,
  p_referrer text,
  p_language text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into landing_sessions (session_token, referrer, language, first_seen, last_seen)
  values (p_session_token, nullif(trim(p_referrer), ''), p_language, now(), now())
  on conflict (session_token) do update
    set language = excluded.language,
        last_seen = now();
end;
$$;

-- Speichert ein Landingpage-Event und aktualisiert die Session-Zeit.
create or replace function track_landing_event(
  p_session_token text,
  p_event_type text,
  p_payload jsonb
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Session muss bereits existieren (wird beim Pageview angelegt).
  update landing_sessions
     set last_seen = now()
   where session_token = p_session_token;

  insert into landing_events (session_token, event_type, payload)
  values (p_session_token, p_event_type, coalesce(p_payload, '{}'::jsonb));
end;
$$;

grant execute on function init_landing_session(text, text, text) to anon;
grant execute on function track_landing_event(text, text, jsonb) to anon;
