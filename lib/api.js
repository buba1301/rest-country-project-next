const url = 'https://restcountries.com/v3.1';

export async function getAllCountries(query) {
  const res = await fetch(`${url}/${query}`);
  const data = await res.json();

  return data;
}

export async function getAllCountriesName({ query, params }) {
  const res = await fetch(`${url}/${query}?${params}`);
  const data = await res.json();

  return data.map((name) => {
    return {
      params: {
        name,
      },
    };
  });
}
