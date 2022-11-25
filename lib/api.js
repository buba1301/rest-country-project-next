const url = 'https://restcountries.com/v3.1';

export async function getAllCountries(query) {
  const res = await fetch(`${url}/${query}`);
  const data = await res.json();

  return data;
}

export async function getAllCountriesName({ query }) {
  const res = await fetch(`${url}/${query}?fields=cca3`);

  const data = await res.json();

  return data.map(({ cca3 }) => {
    return {
      params: {
        name: cca3.toLowerCase(),
      },
    };
  });
}

export async function getCountryData(query) {
  const res = await fetch(`${url}/name/${query}`);
  const data = await res.json();

  return data;
}

export async function getCountryByCode(query) {
  const res = await fetch(`${url}/alpha/${query}`);
  const data = await res.json();

  return data;
}
