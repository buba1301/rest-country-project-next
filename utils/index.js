export function numberWithCommas(num) {
  return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const filterData = (data, type, query) => {
  console.log('filterData', !query, query);
  if (!query) {
    console.log('filterData !!!!!!');
    return data;
  }

  return data.filter((country) => {
    return type === 'search'
      ? country.name.common.toLowerCase() === query
      : country.region === query;
  });
};

const sortData = (data, type, query) => {
  console.log('SORT DATA !!!!!!', data);
  return data;
};

export const transformData = {
  filter: filterData,
  sort: sortData,
};
