/* eslint-disable react-hooks/exhaustive-deps */
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

const sortTypes = ['Name', 'Population', 'Reset'];

export default function Filters({
  initialValue,
  action,
  dropDownName,
}) {
  const [value, setValue] = useState(initialValue);

  const { setSearchValue, setLimit, dispatch, type } = useContext(
    SearchAndFiltersContext
  );

  useEffect(() => {
    type === 'search' && setValue(initialValue);
  }, [type]);

  const handleChange = (value) => {
    setValue(value);
    dispatch({
      type: action,
      value: value === initialValue ? '' : value.toLowerCase(),
    });
    setSearchValue('');
    value === initialValue && setLimit(8);
  };

  return (
    <DropDown
      values={action === 'SORT' ? sortTypes : regions}
      name={value === initialValue ? dropDownName : value}
      selectedValue={value}
      onChange={handleChange}
    />
  );
}
