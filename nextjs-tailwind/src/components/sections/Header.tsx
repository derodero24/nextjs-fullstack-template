import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

import LangButton from '../elements/LangButton';
import ThemeButton from '../elements/ThemeButton';

export default function Header() {
  return (
    <header className="container flex justify-between">
      <Link href="/">
        <a className="text-xl">Next.js</a>
      </Link>
      <nav className="flex items-center space-x-6">
        <ThemeButton className="text-xl hover:opacity-75" />
        <LangButton className="text-xl hover:opacity-75" />
        <a
          href="https://github.com/derodero24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </nav>
    </header>
  );
}
