import type { ReactNode } from 'react';

// Reihenfolge entspricht landingContent.ts services[] (sprachunabhängig).
export const SERVICE_ICONS: ReactNode[] = [
  // Health insurance — shield
  <path key="shield" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  // Tax declarations — bars
  <path key="bars1" d="M18 20V10M12 20V4M6 20v-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  // Retirement (3a/3b) — bars
  <path key="bars2" d="M18 20V10M12 20V4M6 20v-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  // Vested benefits — lightning bolt
  <path key="bolt" d="M13 2L3 14h9l-1 10 10-12h-9l1-10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  // Investments — bars
  <path key="bars3" d="M18 20V10M12 20V4M6 20v-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  // Home financing — shield/house
  <path key="home" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  // Children's plans — people
  <>
    <path key="p1" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle key="p2" cx="9" cy="7" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <path key="p3" d="M23 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="currentColor" strokeWidth="2" />
    <path key="p4" d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" strokeWidth="2" />
  </>,
  // Insurance checkup — umbrella
  <>
    <path key="u1" d="M3 18v-6a9 9 0 0 1 18 0v6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path key="u2" d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" fill="none" stroke="currentColor" strokeWidth="2" />
  </>,
];
