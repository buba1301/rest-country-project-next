import Head from 'next/head';

import { getAllCountries } from '../lib/api';

import Main from '../containers/Main';

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>REST Countries</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main countries={countries} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getAllCountries('all');

  return {
    props: {
      countries: data,
    },
  };
}
