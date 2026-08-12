-- Testdaten für den lokalen/Pilot-Durchklick (Abschnitt 9.8 des Projekt-Briefs).
-- Nicht Teil der Migrationen, damit sie nicht versehentlich in Produktion landen.
-- Ausführen mit: supabase db execute -f supabase/seed.sql  (oder im SQL-Editor des Supabase-Dashboards)

with new_advisor as (
  insert into advisors (name, initials, role_label, experience, bio, brand_color, email)
  values (
    'Martina Keller',
    'MK',
    'Ihre persönliche Beraterin',
    'Seit 12 Jahren im Versicherungsbereich zu Hause',
    'Martina lebt mit ihrer Familie in Winterthur, ist leidenschaftliche Hobbyläuferin und findet: Vorsorge muss man nicht kompliziert erklären, sondern einfach zusammen anschauen.',
    '#0f766e',
    'shero@marken-ding.com'
  )
  returning id
)
insert into appointments (advisor_id, client_name, starts_at, location, token)
select id, 'Sandro', now() + interval '2 days' + interval '3 hours', 'Bei Ihnen zu Hause', 'demo-token-123'
from new_advisor;
