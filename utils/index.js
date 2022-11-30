export function numberWithCommas(num) {
  return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const searchData = (data, query) => {
  if (!query) {
    return data;
  }

  return data.filter(({ name }) =>
    name.common.toLowerCase().startsWith(query)
  );
};

const filterData = (data, type, query) => {
  if (!query) {
    return data;
  }

  return data.filter(({ region }) => region.toLowerCase() === query);
};

const getValueFromCounrty = (country, query) =>
  query === 'name' ? country[query].common : country[query];

const sortData = (data, type, query) => {
  if (!query) {
    return data;
  }

  const copyData = [...data];

  for (let j = copyData.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      const country1 = copyData[i];
      const country2 = copyData[i + 1];

      const value1 = getValueFromCounrty(country1, query);
      const value2 = getValueFromCounrty(country2, query);

      const isTrue =
        query === 'name' ? value1 > value2 : value1 < value2;

      if (isTrue) {
        copyData[i] = country2;
        copyData[i + 1] = country1;
      }
    }
  }

  return copyData;
};

export const transformData = {
  filter: filterData,
  sort: sortData,
  search: searchData,
};
