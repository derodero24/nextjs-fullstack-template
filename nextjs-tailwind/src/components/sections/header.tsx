import Link from 'next/link';

import ThemeSwitch from '../elements/themeSwitch';

const navigations = [
  { label: 'Home', path: '' },
  { label: 'About', path: '' },
];

export default function Header() {
  return (
    <header className="bg-gray-800 px-6 py-2">
      <nav className="container mx-auto flex justify-between text-white">
        <Link href="/">
          <a className="text-xl">Next.js</a>
        </Link>
        <ul className="flex items-center space-x-12">
          {navigations.map(nav => (
            <Link key={nav.label} href={nav.path}>
              <a className="hover:opacity-80">{nav.label}</a>
            </Link>
          ))}
          <ThemeSwitch className="text-xl hover:opacity-80" />
        </ul>
      </nav>
    </header>
  );
}
