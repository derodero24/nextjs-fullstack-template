import Head from 'next/head';

import useLocale from '../../hooks/useLocale';
import { BASE_URL } from '../../utils/constants';

export interface CustomHeadProps {
  title: string | undefined;
  description: string | undefined;
  imageUrl?: string;
  article?: boolean;
}

export default function CustomHead({
  title,
  description,
  imageUrl,
  article,
}: CustomHeadProps) {
  const { locale, asPath, defaultLocale } = useLocale();

  const fullUrl = new URL(asPath, BASE_URL);
  const localePath = locale === defaultLocale ? '' : `/${locale}`;
  const url = fullUrl.origin + localePath + fullUrl.pathname;

  const image = imageUrl ?? `${fullUrl.origin}/icon-512.png`;
  const type = article ? 'article' : 'website';

  const defaultUrl = `${fullUrl.origin}${fullUrl.pathname}`;
  const enUrl = `${fullUrl.origin}/en${fullUrl.pathname}`;

  const domain = fullUrl.origin.replace(/^https?:\/\//, '');

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* OG */}
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content='@derodero24' />
      <meta name="twitter:domain" content={domain} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Alternate */}
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
      <link rel="alternate" hrefLang="ja" href={defaultUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
    </Head>
  );
}
