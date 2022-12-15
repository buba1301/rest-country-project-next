/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import DropDown from './DropDown';
import { SearchAndFiltersContext } from '../context/context';

export default function Filter({
  initialValue,
  action,
  dropDownName,
  values,
}) {
  const [value, setValue] = useState(initialValue);

  const { setSearchValue, dispatch, type } = useContext(
    SearchAndFiltersContext
  );

  const isResetFilterValue = type === 'search' && action === 'FILTER';

  useEffect(() => {
    isResetFilterValue && setValue(initialValue);
  }, [type]);

  const handleChange = (value) => {
    setValue(value);

    dispatch({
      type: action,
      value: value !== initialValue ? value.toLowerCase() : '',
    });

    action === 'FILTER' && setSearchValue('');
  };

  return (
    <>
      <DropDown
        values={values}
        name={value !== initialValue ? value : dropDownName}
        selectedValue={value}
        onChange={handleChange}
      />
    </>
  );
}
