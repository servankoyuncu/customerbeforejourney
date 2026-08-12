-- Hilfsfunktion, damit Edge Functions (mit dem service_role Key) Secrets in
-- Vault ablegen/aktualisieren können, ohne direkten Zugriff auf das vault-
-- Schema zu brauchen. Nur service_role darf das aufrufen, nicht anon/authenticated.

create or replace function upsert_vault_secret(p_name text, p_secret text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  select id into v_id from vault.secrets where name = p_name;
  if v_id is null then
    perform vault.create_secret(p_secret, p_name);
  else
    perform vault.update_secret(v_id, p_secret);
  end if;
end;
$$;

revoke all on function upsert_vault_secret(text, text) from public;
grant execute on function upsert_vault_secret(text, text) to service_role;
