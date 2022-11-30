import { useReducer } from 'react';
import { transformData } from '../utils';

const reducer = (state, { type, value }) => {
  switch (type) {
    case 'SEARCH':
      return {
        ...state,
        type: 'search',
        result: transformData.search(state.countries, value),
      };

    case 'FILTER':
      return {
        ...state,
        type: 'filter',
        result: transformData.filter(
          state.countries,
          type.toLowerCase(),
          value
        ),
      };

    case 'SORT':
      return {
        ...state,
        type: 'sort',
        sortValue: value,
      };

    default:
      return state;
  }
};

const useFiltersState = (countries) => {
  const [state, dispatch] = useReducer(reducer, {
    type: '',
    sortValue: '',
    countries,
    result: countries,
  });

  const { type, result, sortValue } = state;

  return { type, result, sortValue, dispatch };
};

export default useFiltersState;
