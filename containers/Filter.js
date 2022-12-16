/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import DropDown from '../components/DropDown';
import { SearchAndFiltersContext } from '../context/context';

export default function Filter({
  initialValue,
  type,
  dropDownName,
  values,
}) {
  const [value, setValue] = useState(initialValue);

  /* const { setSearchValue, dispatch, type } = useContext(
    SearchAndFiltersContext
  );*/

  const { searchValue, filterValue, sortValue, dispatch } =
    useContext(SearchAndFiltersContext);

  // const isResetFilterValue = type === 'search' && action === 'FILTER';

  /* useEffect(() => {
    isResetFilterValue && setValue(initialValue);
  }, [type]);*/

  const handleChange = (value) => {
    setValue(value);

    dispatch({
      type,
      value: value !== initialValue ? value.toLowerCase() : '',
    });

    // action === 'FILTER' && setSearchValue('');
  };

  return (
    <DropDown
      values={values}
      name={!!filterValue ? value : dropDownName}
      selectedValue={value}
      onChange={handleChange}
    />
  );
}
