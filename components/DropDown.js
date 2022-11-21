import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Listbox } from '@headlessui/react';
import {
  CheckIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';

import s from '../styles/DropDown.module.scss';

const regions = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'All',
];

export default function DropDown({ dispatch }) {
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleChange = (value) => {
    console.log('DropDown: ', value);

    setSelectedRegion(value !== 'all' ? value : '');
  };

  useEffect(() => {
    dispatch({ type: 'FILTER', value: selectedRegion });
  }, [selectedRegion]);

  return (
    <div className={s.listbox}>
      <Listbox
        value={selectedRegion}
        onChange={handleChange}
        name='filter'
      >
        <Listbox.Button className={s.listboxButton}>
          <span>
            {selectedRegion === ''
              ? 'Filter By Region'
              : selectedRegion}
          </span>
          <span>
            <ChevronDownIcon />
          </span>
        </Listbox.Button>
        <Listbox.Options className={s.listOptions}>
          {regions.map((region) => (
            <Listbox.Option
              key={region}
              className={s.option}
              value={region}
              // disabled={region}
            >
              {selectedRegion === region &&
              selectedRegion !== 'All' ? (
                <span>
                  <CheckIcon />
                </span>
              ) : (
                <span></span>
              )}

              <span className={s.regionName}>{region}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
