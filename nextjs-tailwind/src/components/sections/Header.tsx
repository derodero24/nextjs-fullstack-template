import Link from 'next/link';

import LangButton from '../elements/LangButton';
import ThemeButton from '../elements/ThemeButton';

const navigations = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/' },
];

export default function Header() {
  return (
    <header className="container flex justify-between">
      <Link href="/">
        <a className="text-xl">Next.js</a>
      </Link>
      <nav className="flex grow items-center justify-center space-x-10">
        {navigations.map(nav => (
          <Link key={nav.label} href={nav.path}>
            <a className="hover:opacity-75">{nav.label}</a>
          </Link>
        ))}
      </nav>
      <nav className="flex items-center space-x-6">
        <ThemeButton className="text-xl hover:opacity-75" />
        <LangButton className="text-xl hover:opacity-75" />
      </nav>
    </header>
  );
}
