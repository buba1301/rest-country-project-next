import { useContext, useState } from 'react';
import Link from 'next/link';
import { SearchAndFiltersContext } from '../context/context';
import { numberWithCommas, transformData } from '../utils';

import Card from './Card';
import Button from './Button';

import styles from '../styles/CardsContainer.module.scss';

export default function CardsContainer({ countries }) {
  const [limit, setLimit] = useState(8);

  const { sortValue, type } = useContext(SearchAndFiltersContext);

  const sortedCountries = transformData.sort(
    countries,
    type.toLowerCase(),
    sortValue
  );

  const firstPageList = sortedCountries.slice(0, limit);

  const handleClick = () => {
    setLimit((prevState) => prevState + 8);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.grid}>
          {firstPageList.map(
            ({ name, population, region, capital, flags, cca3 }) => (
              <Link
                href={`/countries/${cca3.toLowerCase()}`}
                key={name.common}
                className={styles.link}
              >
                <Card
                  name={name.common}
                  population={numberWithCommas(population)}
                  region={region}
                  capital={capital ? capital[0] : 'no capital'}
                  flag={flags.svg}
                />
              </Link>
            )
          )}
        </div>
      </div>

      <Button
        onClick={handleClick}
        text='More countries...'
        size='xl'
      />
    </>
  );
}
