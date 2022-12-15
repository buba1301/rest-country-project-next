import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import s from '../styles/Search.module.scss';

export default function Search({ value, onChange }) {
  return (
    <form className={s.container}>
      <input
        className={s.input}
        type='search'
        placeholder='Search...'
        value={value}
        onChange={onChange}
      />
      <MagnifyingGlassIcon className={s.icon} />
    </form>
  );
}
