import Link from 'next/link';
import { numberWithCommas } from '../utils';
import Card from './Card';

import styles from '../styles/CardsContainer.module.scss';

export default function CardsContainer({ countriesCards }) {
  return (
    <div className={styles.main}>
      <div className={styles.grid}>
        {countriesCards.map(
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
  );
}
