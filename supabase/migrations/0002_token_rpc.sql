-- RPC-Funktionen, über die der Kunde per Token auf genau seinen Termin zugreift.
-- Alle Funktionen sind SECURITY DEFINER und laufen mit den Rechten des Owners,
-- nicht mit denen der aufrufenden (anon) Rolle. Sie werden gezielt an anon
-- freigegeben, die zugrunde liegenden Tabellen bleiben gesperrt.

-- 1. Termin per Token auflösen + Session öffnen ("Geöffnet"-Messpunkt).
create or replace function resolve_prep_token(p_token text)
returns table (
  client_name       text,
  starts_at         timestamptz,
  location          text,
  advisor_name      text,
  advisor_initials  text,
  advisor_photo_url text,
  advisor_role_label text,
  advisor_experience text,
  advisor_bio       text,
  advisor_brand_color text,
  advisor_logo_url  text,
  last_screen       int
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_appointment_id uuid;
  v_expires_at timestamptz;
begin
  select a.id, a.token_expires_at
    into v_appointment_id, v_expires_at
  from appointments a
  where a.token = p_token;

  if v_appointment_id is null then
    raise exception 'invalid_token' using errcode = 'P0001';
  end if;

  if v_expires_at is not null and v_expires_at < now() then
    raise exception 'expired_token' using errcode = 'P0002';
  end if;

  insert into prep_sessions (appointment_id, opened_at)
  values (v_appointment_id, now())
  on conflict (appointment_id) do update
    set opened_at = coalesce(prep_sessions.opened_at, excluded.opened_at),
        updated_at = now();

  return query
  select
    ap.client_name,
    ap.starts_at,
    ap.location,
    ad.name,
    ad.initials,
    ad.photo_url,
    ad.role_label,
    ad.experience,
    ad.bio,
    ad.brand_color,
    ad.logo_url,
    ps.last_screen
  from appointments ap
  join advisors ad on ad.id = ap.advisor_id
  join prep_sessions ps on ps.appointment_id = ap.id
  where ap.id = v_appointment_id;
end;
$$;

-- 2. Fortschritt aktualisieren: höchster erreichter Screen-Index.
create or replace function update_prep_progress(p_token text, p_screen int)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_appointment_id uuid;
begin
  select a.id into v_appointment_id from appointments a where a.token = p_token;

  if v_appointment_id is null then
    raise exception 'invalid_token' using errcode = 'P0001';
  end if;

  update prep_sessions
  set last_screen = greatest(last_screen, p_screen),
      updated_at = now()
  where appointment_id = v_appointment_id;
end;
$$;

-- 3. Abschluss der Sequenz markieren.
create or replace function complete_prep_session(p_token text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_appointment_id uuid;
begin
  select a.id into v_appointment_id from appointments a where a.token = p_token;

  if v_appointment_id is null then
    raise exception 'invalid_token' using errcode = 'P0001';
  end if;

  update prep_sessions
  set completed_at = coalesce(completed_at, now()),
      updated_at = now()
  where appointment_id = v_appointment_id;
end;
$$;

-- 4. Antwort auf Screen 6 speichern.
create or replace function save_prep_response(p_token text, p_question_key text, p_answer text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_appointment_id uuid;
begin
  select a.id into v_appointment_id from appointments a where a.token = p_token;

  if v_appointment_id is null then
    raise exception 'invalid_token' using errcode = 'P0001';
  end if;

  insert into prep_responses (appointment_id, question_key, answer)
  values (v_appointment_id, p_question_key, p_answer)
  on conflict (appointment_id, question_key) do update
    set answer = excluded.answer,
        created_at = now();
end;
$$;

grant execute on function resolve_prep_token(text) to anon;
grant execute on function update_prep_progress(text, int) to anon;
grant execute on function complete_prep_session(text) to anon;
grant execute on function save_prep_response(text, text, text) to anon;
