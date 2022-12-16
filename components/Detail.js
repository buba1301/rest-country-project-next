import React from 'react';

import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

import Container from '../containers/Container';

import s from '../styles/Detail.module.scss';

import { getInfoList } from '../utils';
import CustomLink from './CustomLink';
import CountryInfo from './CountryInfo';

export default function Detail({ countryData }) {
  const infoList = getInfoList(countryData);

  return (
    <Container classKey='container'>
      <div className={s.backButtonWrap}>
        <CustomLink name='backLink' href='/'>
          <ArrowLeftIcon />
          Back
        </CustomLink>
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
      <CountryInfo
        name={countryData.name.common}
        borders={countryData.borders}
        infoList={infoList}
      />
    </Container>
  );
}
