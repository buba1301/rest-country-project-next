import React, { useContext, useEffect } from 'react';
import DropDown from './DropDown';
import { SearchAndFiltersContext } from './Main';

const sort = ['ByName', 'ByPopulation', 'Reset'];

export default function SortDropDown() {
  const {
    setSearchValue,
    setSelectedValue,
    selectedValue,
    setLimit,
    dispatch,
  } = useContext(SearchAndFiltersContext);

  const handleChange = (value) => {
    setSelectedValue(value !== 'Reset' ? value : '');
    setSearchValue('');
    value === 'All' && setLimit(8);
  };

  useEffect(() => {
    dispatch({ type: 'SORT', value: selectedValue });
  }, [selectedValue]);

  return (
    <DropDown
      values={sort}
      name='Sort'
      selectedValue={selectedValue}
      onChange={handleChange}
    />
  );
}
