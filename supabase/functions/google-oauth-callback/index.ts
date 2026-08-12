// Empfängt den OAuth-Redirect von Google nach Davids einmaliger Kalender-
// Freigabe, tauscht den Code gegen ein Refresh-Token und legt es in Supabase
// Vault ab (Name: google_calendar_refresh_token). Das Refresh-Token braucht
// die spätere Polling-Function, um Davids Kalender im Namen der App zu lesen.

import { createClient } from 'jsr:@supabase/supabase-js@2';

const CLIENT_ID = Deno.env.get('GOOGLE_CLIENT_ID') ?? '';
const CLIENT_SECRET = Deno.env.get('GOOGLE_CLIENT_SECRET') ?? '';
const REDIRECT_URI = Deno.env.get('GOOGLE_OAUTH_REDIRECT_URI') ?? '';

function html(body: string, status = 200) {
  return new Response(`<!doctype html><meta charset="utf-8"><body style="font-family:sans-serif;padding:2rem">${body}</body>`, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const oauthError = url.searchParams.get('error');

  if (oauthError) {
    return html(`<h1>Autorisierung abgelehnt</h1><p>${oauthError}</p>`, 400);
  }
  if (!code) {
    return html('<h1>Fehlt: code</h1><p>Dieser Link muss über den Google-Zustimmungsbildschirm aufgerufen werden.</p>', 400);
  }
  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    return html('<h1>Noch nicht konfiguriert</h1><p>GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET / GOOGLE_OAUTH_REDIRECT_URI fehlen als Function-Secrets.</p>', 500);
  }

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      grant_type: 'authorization_code',
    }),
  });
  const tokenData = await tokenRes.json();

  if (!tokenRes.ok || !tokenData.refresh_token) {
    return html(
      `<h1>Kein Refresh-Token erhalten</h1><pre>${JSON.stringify(tokenData, null, 2)}</pre>` +
        `<p>Meist hilft: Zugriff unter <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a> widerrufen und den Autorisierungslink erneut öffnen (Google gibt ein Refresh-Token nur beim allerersten Consent mit prompt=consent).</p>`,
      400,
    );
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );
  const { error: rpcError } = await supabase.rpc('upsert_vault_secret', {
    p_name: 'google_calendar_refresh_token',
    p_secret: tokenData.refresh_token,
  });

  if (rpcError) {
    return html(`<h1>Fehler beim Speichern</h1><p>${rpcError.message}</p>`, 500);
  }

  return html('<h1>Erfolgreich verbunden</h1><p>Der Kalenderzugriff ist eingerichtet. Sie können dieses Fenster jetzt schliessen.</p>');
});
