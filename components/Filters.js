/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import DropDown from './DropDown';
import { SearchAndFiltersContext } from './Main';
import Maybe from './MayBe';

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

  const isResetFilterValue = type === 'search' && action === 'FILTER';

  useEffect(() => {
    isResetFilterValue && setValue(initialValue);
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

  const isResetFilterName = value === 'All' || type === 'search';

  const isResetSortName = value === 'Reset';

  return (
    <>
      <Maybe test={action === 'SORT'}>
        <DropDown
          values={sortTypes}
          name={isResetSortName ? dropDownName : value}
          selectedValue={value}
          onChange={handleChange}
        />
      </Maybe>
      <Maybe test={action == 'FILTER'}>
        <DropDown
          values={regions}
          name={isResetFilterName ? dropDownName : value}
          selectedValue={value}
          onChange={handleChange}
        />
      </Maybe>
    </>
  );
}
