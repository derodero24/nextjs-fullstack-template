import Link from 'next/link';
import { useState } from 'react';
import { IoLanguage } from 'react-icons/io5';

const langs = [
  { locale: 'ja', label: '🇯🇵 日本語' },
  { locale: 'en', label: '🇺🇸 English' },
];

export default function ThemeButton(props: { className: string }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <IoLanguage {...props} onClick={() => setActive(prev => !prev)} />

      {active && (
        <div className="absolute right-0 mt-2 rounded-md bg-gray-50 py-1 shadow-lg ring-1 ring-black/5">
          {langs.map(lang => (
            <Link href="" locale={lang.locale} key={lang.locale}>
              <a
                className="block whitespace-nowrap px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                onClick={() => setActive(false)}
              >
                {lang.label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
