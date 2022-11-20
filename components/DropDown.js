import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import {
  CheckIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';

import s from '../styles/DropDown.module.scss';

const regions = ['Africa', 'Americe', 'Asia', 'Europ', 'Oceania'];

export default function DropDown() {
  const [selectedPerson, setSelectedPerson] = useState('');

  return (
    <div className={s.listbox}>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className={s.listboxButton}>
          <span>
            {selectedPerson === ''
              ? 'Filter By Region'
              : selectedPerson}
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
              {region}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
