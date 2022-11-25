import React, { useContext, useEffect } from 'react';
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
  const {
    setSearchValue,
    setSelectedValue,
    selectedValue,
    setLimit,
    dispatch,
  } = useContext(SearchAndFiltersContext);

  const handleChange = (value) => {
    setSelectedValue(value !== 'All' ? value : '');
    setSearchValue('');
    value === 'All' && setLimit(8);
  };

  useEffect(() => {
    dispatch({ type: 'FILTER', value: selectedValue });
  }, [selectedValue]);

  return (
    <DropDown
      values={regions}
      name='Filtres By Region'
      selectedValue={selectedValue}
      onChange={handleChange}
    />
  );
}
