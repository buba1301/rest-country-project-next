import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

import s from '../styles/Detail.module.scss';

export default function Detail({ countryData }) {
  console.log('Detail', countryData?.flags.svg);

  const infoList = {
    Population: countryData?.population,
    Region: countryData?.region,
    Subregion: countryData?.subregion,
    Capital: countryData?.capital
      ? countryData?.capital[0]
      : 'no capital',
    Currencies: countryData?.currencies
      ? Object.keys(countryData?.currencies)[0]
      : 'no capital',
  };

  return (
    <div className={s.container}>
      <div className={s.backButtonWrap}>
        <Link href='/' className={s.backBtn}>
          <ArrowLeftIcon />
          Back
        </Link>
      </div>
      <div className={s.flagWrap}>
        <Image
          className={s.img}
          src={countryData?.flags.svg}
          width='320'
          height='230'
          alt='Flag image'
        />
      </div>
      <div className={s.infoWrap}>
        <h1 className={s.name}>{countryData?.name.common}</h1>
        <div className={s.info}>
          {Object.entries(infoList).map(([key, value], index) => (
            <>
              <span key={key}>
                <strong>{`${key}: `}</strong>
                {value}
              </span>
            </>
          ))}
        </div>
        <div className={s.borders}>
          <strong>Border countries: </strong>
          {countryData?.borders
            ? countryData?.borders.map((border) => (
                <Link
                  href={`/countries/${border.toLowerCase()}`}
                  className={s.button}
                  key={border}
                >
                  {border}
                </Link>
              ))
            : ' No'}
        </div>
      </div>
    </div>
  );
}
