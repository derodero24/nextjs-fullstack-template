import '../styles/global.scss';

import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  // define 1vh
  useEffect(() => {
    const vh = (typeof window === 'undefined' ? 0 : window.innerHeight) * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
