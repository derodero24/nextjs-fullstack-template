import Footer from '../sections/footer';
import Header from '../sections/header';

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
