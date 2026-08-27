declare global {
  interface Window {
    fbq?: (...args: (string | number | Record<string, unknown>)[]) => void;
  }
}

export {};
