export function numberWithCommas(num) {
  return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const filterData = (data, type, query) =>
  data.filter((country) => {
    if (!query) {
      return country;
    }
    return type === 'search'
      ? country.name.common.toLowerCase() === query
      : country.region === query;
  });

const sortData = (data, type, query) => {};

export const transformData = {
  filter: filterData,
  sort: sortData,
};
