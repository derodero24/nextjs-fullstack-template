import Link from 'next/link';
import { IoLanguage } from 'react-icons/io5';

const LANGS = [
  { locale: 'en', label: '🇺🇸 English' },
  { locale: 'ja', label: '🇯🇵 日本語' },
] as const;

export default function LangButton(props: { className: string }) {
  return (
    <div className="group relative inline-block text-left">
      <IoLanguage {...props} />

      <div
        className="absolute -right-0 origin-top-right scale-0 overflow-hidden rounded-md bg-gray-50 opacity-0 shadow-lg ring-1 ring-black/5 duration-200 group-hover:scale-100 group-hover:opacity-100"
        onBlur={e => console.log(e)}
      >
        {LANGS.map(lang => (
          <Link
            href=""
            locale={lang.locale}
            key={lang.locale}
            className="block whitespace-nowrap px-4 py-2 text-sm text-gray-700 first:pt-3 last:pb-3 hover:bg-gray-200"
          >
            {lang.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
