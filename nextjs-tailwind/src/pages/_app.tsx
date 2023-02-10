import '../styles/global.scss';

import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

import type { AppProps } from 'next/app';

function define1vh() {
  const vh = (typeof window === 'undefined' ? 0 : window.innerHeight) * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    define1vh();
    window.addEventListener('resize', define1vh);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
