import React, { useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

import s from '../styles/Search.module.scss';

export default function Search({
  value,
  setValue,
  setSelectedRegion,
  dispatch,
}) {
  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value.toLowerCase());

    setSelectedRegion('');
    dispatch({ type: 'SEARCH', value });
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

/* error

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
} */
