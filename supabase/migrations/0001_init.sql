-- Kundenvorbereitungs-App: Basisschema (Abschnitt 5 des Projekt-Briefs)
-- Der Kunde (anon-Rolle) erhält KEINE direkten Rechte auf diesen Tabellen.
-- Sämtlicher Zugriff läuft über SECURITY DEFINER RPC-Funktionen, die den
-- Token gegen genau einen Termin auflösen (siehe 0002_token_rpc.sql).

create extension if not exists "pgcrypto";

create table advisors (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  initials      text not null,
  photo_url     text,
  role_label    text not null default 'Ihr persönlicher Berater',
  experience    text not null,
  bio           text not null,
  brand_color   text,
  logo_url      text,
  created_at    timestamptz not null default now()
);

create table appointments (
  id                uuid primary key default gen_random_uuid(),
  advisor_id        uuid not null references advisors(id) on delete cascade,
  client_name       text not null,
  starts_at         timestamptz not null,
  location          text not null,
  token             text not null unique,
  token_expires_at  timestamptz,
  created_at        timestamptz not null default now()
);

create index appointments_token_idx on appointments (token);

create table prep_sessions (
  id                 uuid primary key default gen_random_uuid(),
  appointment_id     uuid not null unique references appointments(id) on delete cascade,
  opened_at          timestamptz,
  last_screen        int not null default 0,
  completed_at       timestamptz,
  updated_at         timestamptz not null default now()
);

create table prep_responses (
  id                 uuid primary key default gen_random_uuid(),
  appointment_id     uuid not null references appointments(id) on delete cascade,
  question_key       text not null,
  answer             text not null,
  created_at         timestamptz not null default now(),
  unique (appointment_id, question_key)
);

-- Row Level Security: aktiviert, aber ohne Policies für anon/authenticated.
-- Das sperrt jeden direkten Tabellenzugriff; Zugriff nur via RPC (SECURITY DEFINER).
alter table advisors enable row level security;
alter table appointments enable row level security;
alter table prep_sessions enable row level security;
alter table prep_responses enable row level security;
