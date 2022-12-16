import { useReducer } from 'react';

export const INITIAL_STATE = {
  searchValue: '',
  filterValue: '',
  sortValue: '',
};

export const REDUCER = (state, { type, value }) => {
  switch (type) {
    case 'SEARCH':
      return {
        ...state,
        searchValue: value,
      };

    case 'FILTER':
      return {
        ...state,
        type: 'filter',
        filterValue: value,
      };

    case 'SORT':
      return {
        ...state,
        sortValue: value,
      };
    case 'RESET':
      return {
        ...state,
        filterValue: '',
        sortValue: '',
      };
    case 'RESET_SEARCH':
      return {
        ...state,
        searchValue: '',
      };
    default:
      return state;
  }
};

const useFiltersState = () => {
  const [state, dispatch] = useReducer(REDUCER, INITIAL_STATE);

  const { searchValue, filterValue, sortValue } = state;

  return { searchValue, filterValue, sortValue, dispatch };
};

export default useFiltersState;
