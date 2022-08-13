import Footer from '../section/footer';
import Header from '../section/header';

import type { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
