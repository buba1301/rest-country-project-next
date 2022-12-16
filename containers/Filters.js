import React from 'react';
import Container from './Container';
import Filter from '../containers/Filter';

const filters = [
  {
    id: '1',
    initialValue: 'Reset',
    type: 'SORT',
    dropDownName: 'Sort',
    values: ['Name', 'Population', 'Reset'],
  },
  {
    id: '2',
    initialValue: 'All',
    type: 'FILTER',
    dropDownName: 'Filter By Region',
    values: [
      'Africa',
      'Americas',
      'Asia',
      'Europe',
      'Oceania',
      'All',
    ],
  },
];

export default function Filters() {
  return (
    <Container classKey='dropDown'>
      {filters.map(
        ({ id, initialValue, type, dropDownName, values }) => {
          return (
            <Filter
              key={id}
              initialValue={initialValue}
              type={type}
              dropDownName={dropDownName}
              values={values}
            />
          );
        }
      )}
    </Container>
  );
}
