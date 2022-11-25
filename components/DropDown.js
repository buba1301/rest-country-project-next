/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Listbox } from '@headlessui/react';

import {
  CheckIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';

import s from '../styles/DropDown.module.scss';

export default function DropDown({
  values,
  name,
  selectedValue,
  onChange,
}) {
  return (
    <div className={s.listbox}>
      <Listbox value={selectedValue} onChange={onChange}>
        <Listbox.Button className={s.listboxButton}>
          <span>{name}</span>
          <span>
            <ChevronDownIcon />
          </span>
        </Listbox.Button>
        <Listbox.Options className={s.listOptions}>
          {values.map((value) => (
            <Listbox.Option
              key={value}
              className={s.option}
              value={value}
            >
              {selectedValue === value && selectedValue !== 'All' ? (
                <span>
                  <CheckIcon />
                </span>
              ) : (
                <span></span>
              )}

              <span className={s.valueName}>{value}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}
