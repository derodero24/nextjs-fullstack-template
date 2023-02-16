import Head from 'next/head';

import { useLocale } from '../../hooks/useLocale';
import { DOMAIN } from '../../lib/constans';

interface Props {
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
}: Props) {
  const { locale, asPath, defaultLocale } = useLocale();

  const fullUrl = new URL(`https://${DOMAIN}${asPath}`);
  const localePath = locale === defaultLocale ? '' : `/${locale}`;
  const url = fullUrl.origin + localePath + fullUrl.pathname;

  const image = imageUrl ?? `https://${DOMAIN}/icon-512.png`;
  const type = article ? 'article' : 'website';

  const defaultUrl = `https://${DOMAIN}${fullUrl.pathname}`;
  const jaUrl = `https://${DOMAIN}/ja${fullUrl.pathname}`;

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

      {/* Alternate */}
      <link rel="alternate" hrefLang="x-default" href={defaultUrl} />
      <link rel="alternate" hrefLang="en" href={defaultUrl} />
      <link rel="alternate" hrefLang="ja" href={jaUrl} />
    </Head>
  );
}
