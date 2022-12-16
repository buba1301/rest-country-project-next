/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import DropDown from '../components/DropDown';
import { SearchAndFiltersContext } from '../context/context';

export default function Filter({
  initialValue,
  type,
  dropDownName,
  values,
}) {
  const { filterValue, sortValue, dispatch } = useContext(
    SearchAndFiltersContext
  );

  const value = type === 'FILTER' ? filterValue : sortValue;

  const handleChange = (value) => {
    dispatch({
      type,
      value: value !== initialValue ? value : '',
    });

    type === 'FILTER' &&
      dispatch({
        type: 'RESET_SEARCH',
      });
  };

  return (
    <DropDown
      values={values}
      name={value || dropDownName}
      selectedValue={value}
      onChange={handleChange}
    />
  );
}
