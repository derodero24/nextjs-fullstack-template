import Layout from '../components/layouts/Layout';
import CustomHead from '../components/sections/CustomHead';
import { useLocale } from '../hooks/useLocale';
import { ENV } from '../lib/constans';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { t } = useLocale();

  console.log('stage =', ENV);

  return (
    <Layout>
      <CustomHead
        title="Next.js Template with Tailwind.css"
        description="Next.js Template with Tailwind.css created by @derodero24"
      />
      <div className="container">
        <p className="text-xl">{t('home/greet')}</p>
      </div>
    </Layout>
  );
};

export default Home;
