import type { NextPage } from 'next';
import Head from 'next/head';
import siteMetadata from '../data/siteMetadata';
import dynamic from 'next/dynamic';

const SingleMarketplace = dynamic(
  () => import('../components/marketplace/SingleCurrencyMarketplace'),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.siteName} | Home</title>
      </Head>
      <div className="">
        <SingleMarketplace />
      </div>
    </>
  );
};

export default Home;
