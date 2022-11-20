import React from 'react';
import Image from 'next/image';

import s from '../styles/Detail.module.scss';

export default function Detail({ countryData }) {
  const {
    flags,
    borders,
    name,
    population,
    region,
    subregion,
    capital,
    currencies,
    languages,
  } = countryData;

  const infoList = [
    population,
    region,
    subregion,
    capital[0],
    Object.keys(currencies)[0],
  ];

  return (
    <div className={s.container}>
      <div className={s.backButtonWrap}></div>
      <div className={s.flagWrap}>
        <Image
          className={s.img}
          src={flags.svg}
          width='400'
          height='230'
          alt='Flag image'
        />
      </div>
      <div className={s.infoWrap}>
        <h1 className={s.name}>{name.common}</h1>
        <div className={s.info}>
          {infoList.map((value, index) => (
            <p key={index}>{value}</p>
          ))}
        </div>
        <div className={s.borders}>
          Border countryes:
          {borders
            ? borders.map((border) => (
                <button className={s.button} key={border}>
                  {border}
                </button>
              ))
            : ' No'}
        </div>
      </div>
    </div>
  );
}
