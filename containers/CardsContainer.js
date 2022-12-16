import { useContext, useState } from 'react';
import Link from 'next/link';
import { SearchAndFiltersContext } from '../context/context';
import { numberWithCommas, transformData } from '../utils';

import Card from '../components/Card';
import Button from '../components/Button';
import Container from './Container';

export default function CardsContainer({ countries }) {
  const [limit, setLimit] = useState(9);

  const { sortValue, type } = useContext(SearchAndFiltersContext);

  const sortedCountries = transformData.sort(
    countries,
    type.toLowerCase(),
    sortValue
  );

  const firstPageList = sortedCountries.slice(0, limit);

  const handleClick = () => {
    setLimit((prevState) => prevState + 9);
  };

  return (
    <>
      <Container classKey='grid'>
        {firstPageList.map(
          ({ name, population, region, capital, flags, cca3 }) => (
            <Link
              href={`/countries/${cca3.toLowerCase()}`}
              key={name.common}
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
      </Container>

      <Button
        onClick={handleClick}
        text='More countries...'
        size='xl'
      />
    </>
  );
}
