import React from 'react';
import Container from './Container';
import Filter from './Filter';

const filters = [
  {
    id: '1',
    initialValue: 'Reset',
    action: 'SORT',
    dropDownName: 'Sort',
    values: ['Name', 'Population', 'Reset'],
  },
  {
    id: '2',
    initialValue: 'All',
    action: 'FILTER',
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
        ({ id, initialValue, action, dropDownName, values }) => {
          return (
            <Filter
              key={id}
              initialValue={initialValue}
              action={action}
              dropDownName={dropDownName}
              values={values}
            />
          );
        }
      )}
    </Container>
  );
}
