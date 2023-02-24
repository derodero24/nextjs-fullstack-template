import axios from 'axios';
import { useEffect, useState } from 'react';

import Layout from '../components/layouts/Layout';
import { useLocale } from '../hooks/useLocale';

import type { NameData } from './api/name';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { t, locale } = useLocale();
  const [name, setName] = useState<NameData>({ en: '', ja: '' });

  useEffect(() => {
    axios<NameData>({
      url: '/api/name/',
      method: 'GET',
    })
      .then(res => setName(res.data))
      .catch(console.error);
  }, []);

  return (
    <Layout
      title="Next.js Best Template"
      description="Next.js Best Template created by @derodero24"
    >
      <div className="container">
        <p className="text-xl">
          {t('home/greet')} {name[locale]}!!
        </p>
      </div>
    </Layout>
  );
};

export default Home;
