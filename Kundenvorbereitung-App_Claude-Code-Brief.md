# Projekt-Brief: Kundenvorbereitungs-App (Pilot)

Dieser Brief ist als Ausgangspunkt für Claude Code gedacht. Gib ihn als Kontext mit, bevor du Code generieren lässt. Er beschreibt, was gebaut wird, wie die Daten aussehen und in welcher Reihenfolge vorgegangen werden soll.

---

## 1. Was wir bauen

Eine schlanke, mobile-first Web-App, die ein Versicherungskunde per personalisiertem Link 24 bis 48 Stunden vor seinem Beratungstermin erhält. Sie bereitet den Kunden in unter drei Minuten auf den Termin vor: sie stellt den Berater als Mensch vor, erklärt kurz den Sinn, zeigt die Agenda und stellt eine Frage, deren Antwort direkt an den Berater geht.

**Wichtigstes Prinzip:** Die App ist nicht nur ein Kundenerlebnis, sondern ein Nachweis- und Briefing-Instrument. Sie muss vier Signale erfassen und speichern (siehe Abschnitt 4). Ohne dieses Tracking ist die App wertlos für den Piloten. Das Tracking ist Pflicht, kein Nice-to-have.

Was die App bewusst NICHT tut: Sie stellt keine gesetzlichen Beraterpflichten (VAG) dar. Diesen Teil übernimmt der Berater selbst im Termin. Bitte keinen Screen dazu bauen.

---

## 2. Tech-Stack

Analog zum bestehenden Insubuddy-Projekt, damit Wissen und Infrastruktur wiederverwendbar sind:

- Frontend: React (Vite), mobile-first
- Styling: Tailwind oder CSS-Variablen, brandbar pro Broker (Farben und Logo austauschbar)
- Backend und Datenbank: Supabase (Postgres, Row Level Security, optional Edge Functions)
- Deployment: statisches Frontend (z.B. Netlify oder Vercel), Supabase als Backend

Kein eigenes Server-Backend nötig. Für den Piloten genügt Supabase.

---

## 3. Die Screens

Sieben Screens plus ein Abschluss-Screen. Der Kunde bewegt sich mit "Weiter" und "Zurück" durch die Sequenz. Alle Textinhalte und Berater-Daten sind dynamisch (siehe Abschnitt 5), die folgenden Texte sind die Standardvorlage.

**Screen 1: Hook**
- Klein oben: "Ihre Terminvorbereitung"
- Gross: "3 Minuten. Dann sind Sie bereit."
- Unten klein (Consent): "Mit dem Start stimmen Sie zu, dass Ihre Angaben ausschliesslich zur Vorbereitung Ihres Termins verwendet werden."
- Button: "Los geht's"

**Screen 2: Wer berät Sie**
- Avatar (Initialen oder Foto), Name des Beraters, Rollen-Label, ein Erfahrungs-Satz.

**Screen 3: Der Mensch dahinter**
- Titel: "Kein Verkäufer. Ein Mensch."
- Ein persönlicher Absatz über den Berater (Familie, Hobby, Haltung).

**Screen 4: Warum absichern**
- Titel: "Warum sich Absichern lohnt"
- Kurztext: "Gewisse Risiken sind besser abgesichert als selbst getragen. Dann entscheidet im Ernstfall nicht der Zufall, sondern Ihr Plan."

**Screen 5: Darüber sprechen wir (Agenda)**
- Vier Punkte: Ihre heutige Situation; Veränderungen im Leben; Ob sich eine Anpassung für Sie lohnt; Ihre Fragen.
- Klein: "Kein Verkaufsgespräch. Ein Überblick."

**Screen 6: Eine Frage an Sie (interaktiv)**
- Frage: "Was ist Ihnen am Termin am wichtigsten?"
- Drei antippbare Optionen (single-select): Meine Familie absichern; Sparen wo möglich; Einfach den Überblick behalten.
- Die Auswahl wird gespeichert (siehe Abschnitt 4).
- Klein: "Ihre Antwort sieht nur Ihr Berater und hilft ihm, den Termin auf Sie abzustimmen."

**Screen 7: Wir sehen uns (Abschluss der Sequenz)**
- Termindatum, Uhrzeit, Ort. Ein warmer Schlusssatz.
- Button: "Beenden"

**Abschluss-Screen (nach "Beenden")**
- "Alles bereit. Sie können dieses Fenster nun schliessen."
- Zusätzlich ein `window.close()`-Versuch (funktioniert nur in installierten PWAs zuverlässig, darum ist der Abschluss-Screen der Standard).

---

## 4. Die vier Messpunkte (Pflicht)

Diese vier Signale müssen pro Kunde und Termin in Supabase landen, verknüpft mit der Termin-ID. Sie speisen das Berater-Briefing und die Pilot-Auswertung.

1. **Geöffnet:** Zeitstempel beim ersten Laden der App (Screen 1 sichtbar).
2. **Fortschritt:** der höchste erreichte Screen-Index. Bei jedem Screenwechsel aktualisieren.
3. **Abgeschlossen:** Zeitstempel, wenn der Kunde Screen 7 erreicht oder "Beenden" klickt.
4. **Antwort auf Screen 6:** die gewählte Option.

Wichtig: Schreibe diese Werte laufend (nicht erst am Ende), damit auch abgebrochene Sessions Daten liefern. Ein Kunde, der bei Screen 3 aufhört, ist ein wertvoller Datenpunkt.

---

## 5. Datenmodell (Vorschlag für Supabase)

```
advisors
  id            uuid  primary key
  name          text
  initials      text
  photo_url     text  nullable
  role_label    text            -- z.B. "Ihr persönlicher Berater"
  experience    text            -- z.B. "Seit 12 Jahren im Versicherungsbereich zu Hause"
  bio           text            -- persönlicher Absatz für Screen 3
  brand_color   text  nullable  -- pro Broker brandbar
  logo_url      text  nullable

appointments
  id            uuid  primary key
  advisor_id    uuid  references advisors(id)
  client_name   text            -- Vorname des Kunden, für persönliche Ansprache
  starts_at     timestamptz
  location      text            -- z.B. "Bei Ihnen zu Hause"
  token         text  unique    -- steckt in der URL, siehe Abschnitt 6
  created_at    timestamptz default now()

prep_sessions
  id                 uuid  primary key
  appointment_id     uuid  references appointments(id)
  opened_at          timestamptz nullable
  last_screen        int   default 0
  completed_at       timestamptz nullable
  updated_at         timestamptz default now()

prep_responses
  id                 uuid  primary key
  appointment_id     uuid  references appointments(id)
  question_key       text            -- z.B. "wichtigstes_anliegen"
  answer             text
  created_at         timestamptz default now()
```

Row Level Security: Der Kunde greift nur lesend auf sein eigenes `appointment` (plus zugehörigen `advisor`) über den Token zu und darf nur die eigene `prep_session` und `prep_response` schreiben. Kein Kunde darf fremde Termine sehen. Am saubersten über eine Supabase Edge Function oder eine RPC, die den Token gegen genau einen Datensatz auflöst, statt die Tabellen direkt offen zu legen.

---

## 6. Eintritt und Personalisierung

- Der Kunde öffnet eine URL der Form `app.domain.ch/p/{token}`.
- Beim Laden löst die App den Token auf und lädt `appointment` plus `advisor`. Daraus werden alle dynamischen Felder gefüllt (Name des Beraters, Bio, Termindatum, Ort, Vorname des Kunden).
- Existiert noch keine `prep_session` für dieses `appointment`, wird eine angelegt und `opened_at` gesetzt. Sonst wird die bestehende aktualisiert.
- Ungültiger oder abgelaufener Token: freundlicher Fehler-Screen ("Dieser Link ist nicht mehr gültig"), kein Crash.

**Andockpunkt an den restlichen Funnel:** Der Token entsteht, wenn der Kunde auf der Landingpage einen Termin-Slot bucht. In diesem Moment wird ein `appointment` mit Token erzeugt und der Vorbereitungs-Link 24 bis 48 Stunden vor `starts_at` verschickt (SMS und E-Mail). Für den Piloten darf dieser Versand von Hand ausgelöst werden. Baue die App so, dass sie mit einem fertigen Token einfach funktioniert, unabhängig davon, wie er erzeugt und verschickt wird.

---

## 7. Datenschutz

- Consent-Satz auf Screen 1 (siehe oben) muss sichtbar sein, bevor Daten erfasst werden.
- Hinweis auf Screen 6, dass die Antwort nur der Berater sieht.
- Nur die nötigen Daten erheben, Zweckbindung auf Terminvorbereitung. Kein Tracking Dritter, keine Analytics-Skripte, die Kundendaten abfliessen lassen.

---

## 8. Design

- Mobile-first, ruhig, schnell. Eine Aussage pro Screen.
- Pro Broker brandbar: Akzentfarbe und Logo aus dem `advisor`-Datensatz.
- Kurze Ladezeit, keine schweren Assets. Der Hook muss sofort da sein.
- Fortschrittsanzeige (Punkte oder Balken) oben, damit der Kunde sieht, wie kurz es ist.

---

## 9. Baureihenfolge (Vorschlag für Claude Code)

1. Vite-React-Projekt aufsetzen, Supabase-Client einbinden, Umgebungsvariablen.
2. Supabase-Schema aus Abschnitt 5 anlegen (Migration), plus RLS oder eine Token-RPC.
3. Routing: eine Route `/p/:token`, die den Termin auflöst und den Personalisierungs-Kontext lädt.
4. Screen-Komponenten 1 bis 7 plus Abschluss-Screen, mit "Weiter" und "Zurück".
5. Tracking verdrahten: `opened_at` beim Laden, `last_screen` bei jedem Wechsel, `completed_at` am Ende, Antwort aus Screen 6 in `prep_responses`.
6. Fehler-Screen für ungültige Tokens.
7. Branding aus dem `advisor`-Datensatz durchreichen.
8. Testdaten anlegen (ein `advisor`, ein `appointment` mit Token) und den ganzen Fluss auf dem Handy durchklicken.

---

## 10. Beispiel-Prompts für Claude Code

Konkrete Einstiege, die du direkt verwenden kannst:

> "Lies den beiliegenden Projekt-Brief. Erstelle als Erstes das Vite-React-Grundgerüst und binde den Supabase-Client ein. Danach zeigst du mir das Datenbank-Schema aus Abschnitt 5 als Supabase-Migration."

> "Baue die Route `/p/:token`, die aus Supabase das appointment und den advisor lädt und einen React-Kontext für die Personalisierung bereitstellt. Bei ungültigem Token einen freundlichen Fehler-Screen."

> "Implementiere die sieben Screens plus Abschluss-Screen laut Abschnitt 3. Verdrahte parallel das Tracking aus Abschnitt 4: schreibe opened_at, last_screen laufend, completed_at und die Antwort aus Screen 6. Achte darauf, dass auch abgebrochene Sessions ihre Daten hinterlassen."

> "Mach die App pro Broker brandbar: Akzentfarbe und Logo kommen aus dem advisor-Datensatz."
