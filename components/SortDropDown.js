import React, { useContext, useEffect, useState } from 'react';
import DropDown from './DropDown';
import { SearchAndFiltersContext } from './Main';

const sortTypes = ['Name', 'Population', 'Reset'];

export default function SortDropDown() {
  const [value, setValue] = useState('Reset');

  const { setSearchValue, setLimit, dispatch, type } = useContext(
    SearchAndFiltersContext
  );

  useEffect(() => {
    type === 'search' && setValue('Reset');
  }, [type]);

  const handleChange = (value) => {
    setValue(value);
    dispatch({
      type: 'SORT',
      value: value === 'Reset' ? '' : value.toLowerCase(),
    });
    setSearchValue('');
    value === 'Reset' && setLimit(8);
  };

  return (
    <DropDown
      values={sortTypes}
      name={value === 'Reset' ? 'Sort' : value}
      selectedValue={value}
      onChange={handleChange}
    />
  );
}
