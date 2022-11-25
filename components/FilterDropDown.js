import React, { useContext, useState } from 'react';
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
  const [value, setValue] = useState('');

  const { setSearchValue, setLimit, dispatch } = useContext(
    SearchAndFiltersContext
  );

  const handleChange = (value) => {
    setValue(value);
    dispatch({ type: 'FILTER', value: value === 'All' ? '' : value });
    setSearchValue('');
    value === 'All' && setLimit(8);
  };

  return (
    <DropDown
      values={regions}
      name='Filtres By Region'
      selectedValue={value}
      onChange={handleChange}
    />
  );
}
