import Link from 'next/link';

import GitHubButton from '../elements/GitHubButton';
import LangButton from '../elements/LangButton';
import ThemeButton from '../elements/ThemeButton';

export default function Header() {
  return (
    <header className="container flex justify-between px-4 py-3">
      <Link href="/" className="text-3xl font-semibold">
        Next.js
      </Link>
      <div className="flex items-center space-x-6">
        <ThemeButton className="icon-btn" />
        <LangButton className="icon-btn" />
        <GitHubButton className="icon-btn" />
      </div>
    </header>
  );
}
