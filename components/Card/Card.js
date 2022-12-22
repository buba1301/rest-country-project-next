import React from 'react';
import Image from 'next/image';

import s from '../../styles/Card.module.scss';

export default function Card({ name, population, region, capital, flag }) {
  return (
    <div className={s.card} key={name}>
      <Image className={s.img} src={flag} height={159} width={280} alt="Flag image" />

      <div className={s.info}>
        <h2 className={s.name}>{name}</h2>
        <p>
          <strong>Population: </strong>
          {`${population}`}
        </p>
        <p>
          <strong>Region: </strong>
          {`${region}`}
        </p>
        <p>
          <strong>Capital: </strong>
          {`${capital}`}
        </p>
      </div>
    </div>
  );
}
