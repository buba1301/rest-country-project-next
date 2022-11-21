import React, { useState } from 'react';
import cn from 'classnames';
import { Listbox } from '@headlessui/react';
import {
  CheckIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';

import s from '../styles/DropDown.module.scss';

const regions = [
  'Africa',
  'Americe',
  'Asia',
  'Europ',
  'Oceania',
  'All',
];

export default function DropDown() {
  const [selectedCountry, setSelectedCountry] = useState('All');

  console.log('!!!', selectedCountry);

  return (
    <div className={s.listbox}>
      <Listbox value={selectedCountry} onChange={setSelectedCountry}>
        <Listbox.Button className={s.listboxButton}>
          <span>
            {selectedCountry === 'All'
              ? 'Filter By Region'
              : selectedCountry}
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
              {selectedCountry === region &&
              selectedCountry !== 'All' ? (
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
