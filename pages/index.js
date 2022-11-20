import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { getAllCountries } from '../lib/api';

import Card from '../components/Card';
import Search from '../components/Search';
import DropDown from '../components/DropDown';

import styles from '../styles/Home.module.scss';

export default function Home({ countries }) {
  // const { name, population, region, capital } = countries[0];

  const firstPageList = countries.slice(0, 8);

  console.log('Countryes', countries.slice(0, 8));

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

      <div className={styles.filters}>
        <Search />
        <DropDown />
      </div>
      <div className={styles.main}>
        <div className={styles.grid}>
          {firstPageList.map(
            ({ name, population, region, capital, flags }) => (
              <Link
                href={`/countries/${name.common}`}
                key={name.common}
                className={styles.link}
              >
                <Card
                  name={name.common}
                  population={population}
                  region={region}
                  capital={capital[0]}
                  flag={flags.svg}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await getAllCountries('all');

  console.log('HOME', data);

  return {
    props: {
      countries: data,
    },
  };
}
