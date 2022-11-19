const url = 'https://restcountries.com/v3.1';

export async function getAllCountries(query) {
  console.log(`${url}/${query}`, '!!!!');
  const res = await fetch(`${url}/${query}`);
  const data = await res.json();

  return data;

  console.log('DATA', data);
}
