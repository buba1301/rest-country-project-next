import React from 'react';

import s from '../../styles/CountryInfo.module.scss';
import CustomLink from '../CustomLink';

export default function CountryInfo({ infoList, borders, name }) {
  return (
    <div className={s.infoWrap}>
      <h1 className={s.name}>{name}</h1>
      <div className={s.info}>
        {Object.entries(infoList).map(([key, value]) => (
          <span key={key}>
            <strong>{`${key}: `}</strong>
            {value}
          </span>
        ))}
      </div>

      <div className={s.borders}>
        <strong>{`Border countries:  `}</strong>
        {borders
          ? borders.map((border) => (
              <CustomLink
                key={border}
                name="borderLink"
                href={`/countries/${border.toLowerCase()}`}
              >
                {border}
              </CustomLink>
            ))
          : ' No'}
      </div>
    </div>
  );
}
