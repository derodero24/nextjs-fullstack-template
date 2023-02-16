import Layout from '../components/layouts/Layout';
import CustomHead from '../components/sections/CustomHead';
import { useLocale } from '../hooks/useLocale';

import type { NextPage } from 'next';

const Page: NextPage = () => {
  const { t } = useLocale();

  return (
    <>
      <CustomHead title={t('home/title')} description={t('home/description')} />
      <Layout>
        <h1 className="my-24 flex flex-col items-center">
          <span className="my-1 text-6xl">404</span>
          <span className="text-xl opacity-60">page not found...</span>
        </h1>
      </Layout>
    </>
  );
};

export default Page;
