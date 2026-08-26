import { useEffect, useRef } from 'react';
import { useLandingTracking } from '../context/LandingTrackingContext';

const SECTIONS = ['hero', 'how', 'services', 'about', 'faq', 'book'] as const;

export function useLandingTrackingEvents(language: string) {
  const { track } = useLandingTracking();
  const previousLanguageRef = useRef<string | null>(null);
  const observedSectionsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    track('pageview', { path: window.location.pathname });
  }, [track]);

  useEffect(() => {
    if (previousLanguageRef.current !== null && previousLanguageRef.current !== language) {
      track('language_change', { from: previousLanguageRef.current, to: language });
    }
    previousLanguageRef.current = language;
  }, [language, track]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting && id && !observedSectionsRef.current.has(id)) {
            observedSectionsRef.current.add(id);
            track('section_visible', { section: id });
          }
        });
      },
      { threshold: 0.3 },
    );

    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [track]);

  return { track };
}
