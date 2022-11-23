import React, { useEffect, useState, useTransition } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import s from '../styles/Search.module.scss';

export default function Search({ dispatch }) {
  const [value, setValue] = useState('');
  const [pending, startTransition] = useTransition();

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value.toLowerCase());
    startTransition(() => {
      dispatch({ type: 'SEARCH', value });
    });
  };

  return (
    <form className={s.container}>
      <input
        className={s.input}
        type='search'
        placeholder='Search...'
        value={value}
        onChange={handleChange}
      />
      <MagnifyingGlassIcon className={s.icon} />
    </form>
  );
}
