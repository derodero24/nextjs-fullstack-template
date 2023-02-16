import axios from 'axios';

import Layout from '../components/layouts/Layout';
import CustomHead from '../components/sections/CustomHead';
import { useLocale } from '../hooks/useLocale';
import { BASE_URL } from '../lib/constans';

import type { NameData } from './api/name';
import type { InferGetStaticPropsType, NextPage } from 'next';

export async function getStaticProps() {
  return axios<NameData>({
    baseURL: BASE_URL,
    url: '/api/name',
    method: 'GET',
  }).then(res => ({ props: res.data }));
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = name => {
  const { t, locale } = useLocale();

  return (
    <Layout>
      <CustomHead
        title="Next.js Template with Tailwind.css"
        description="Next.js Template with Tailwind.css created by @derodero24"
      />
      <div className="container">
        <p className="text-xl">
          {t('home/greet')} {name[locale]}!!
        </p>
      </div>
    </Layout>
  );
};

export default Home;
