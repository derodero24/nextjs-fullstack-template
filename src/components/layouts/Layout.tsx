import CustomHead from '../sections/CustomHead';
import Footer from '../sections/Footer';
import Header from '../sections/Header';

import type { CustomHeadProps } from '../sections/CustomHead';
import type { ReactNode } from 'react';

interface Props extends CustomHeadProps {
  children: ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <>
      <CustomHead {...props} />
      <div className="flex min-h-inner-screen flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
