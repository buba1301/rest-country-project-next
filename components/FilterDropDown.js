import React, { useContext, useEffect, useState } from 'react';
import DropDown from './DropDown';
import { SearchAndFiltersContext } from './Main';

const regions = [
  'Africa',
  'Americas',
  'Asia',
  'Europe',
  'Oceania',
  'All',
];

export default function FilterDropDown() {
  const [value, setValue] = useState('All');

  const { setSearchValue, setLimit, dispatch, type } = useContext(
    SearchAndFiltersContext
  );

  useEffect(() => {
    type === 'search' && setValue('');
  }, [type]);

  const handleChange = (value) => {
    setValue(value);
    dispatch({ type: 'FILTER', value: value === 'All' ? '' : value });
    setSearchValue('');
    value === 'All' && setLimit(8);
  };

  return (
    <DropDown
      values={regions}
      name={value === 'All' ? 'Filter By Region' : value}
      selectedValue={value}
      onChange={handleChange}
    />
  );
}
