import React, { useContext, useState } from 'react';
import DropDown from './DropDown';
import { SearchAndFiltersContext } from './Main';

const sortTypes = ['ByName', 'ByPopulation', 'Reset'];

export default function SortDropDown() {
  const [value, setValue] = useState('');

  const { setSearchValue, setLimit, dispatch } = useContext(
    SearchAndFiltersContext
  );

  const handleChange = (value) => {
    setValue(value);
    dispatch({ type: 'SORT', value: value === 'Reset' ? '' : value });
    setSearchValue('');
    value === 'Reset' && setLimit(8);
  };

  return (
    <DropDown
      values={sortTypes}
      name='Sort'
      selectedValue={value}
      onChange={handleChange}
    />
  );
}
