export function numberWithCommas(num) {
  return num && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getInfoList(countryData) {
  console.log(countryData);
  return {
    Population: numberWithCommas(countryData?.population),
    Region: countryData?.region,
    Subregion: countryData?.subregion,
    Capital: countryData?.capital ? countryData?.capital[0] : 'no capital',
    Currencies: countryData?.currencies ? Object.keys(countryData?.currencies)[0] : 'no currencies',
  };
}

const searchData = (data, query) => {
  if (!query) {
    return data;
  }

  return data.filter(({ name }) => name.common.toLowerCase().startsWith(query));
};

const filterData = (data, query) => {
  if (!query) {
    return data;
  }

  return data.filter(({ region }) => region.toLowerCase() === query.toLowerCase());
};

const getValueFromCounrty = {
  name: (data) => data.name.common,
  population: (data) => data.population,
};

const sortCodition = {
  name: (val1, val2) => val1 > val2,
  population: (val1, val2) => val1 < val2,
};

const sortData = (data, query) => {
  if (!query) {
    return data;
  }

  const copyData = [...data];

  for (let j = copyData.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      const country1 = copyData[i];
      const country2 = copyData[i + 1];

      const sortType = query.toLowerCase();

      const value1 = getValueFromCounrty[sortType](country1);
      const value2 = getValueFromCounrty[sortType](country2);

      const isTrue = sortCodition[sortType](value1, value2);

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
