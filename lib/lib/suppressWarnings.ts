// lib/suppressWarnings.ts
export function suppressFramerWarnings() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    const originalError = console.error;
    console.error = (...args) => {
      const message = args[0]?.toString() || '';
      if (
        message.includes('React does not recognize the `parentSize` prop') ||
        message.includes('React does not recognize the `providedWindow` prop')
      ) {
        return;
      }
      originalError(...args);
    };
  }
}