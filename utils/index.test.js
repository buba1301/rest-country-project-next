/* eslint-disable no-undef */
import {
  getInfoList,
  numberWithCommas,
  transformData,
} from './index';

test('get number with commas', () => {
  const actual = numberWithCommas(100000);
  const res = '100,000';
  expect(actual).toBe(res);
});

describe('create object for info page', () => {
  test('create object for info page for country wich has capital and currencies', () => {
    const dataWithCapitalandCurencies = {
      population: 100000,
      region: 'Americas',
      subregion: 'South America',
      capital: ['Buenos Aires'],
      currencies: { ARS: { name: 'Argentine peso', symbol: '$' } },
    };

    const res = {
      Population: '100,000',
      Region: 'Americas',
      Subregion: 'South America',
      Capital: 'Buenos Aires',
      Currencies: 'ARS',
    };

    const actual = getInfoList(dataWithCapitalandCurencies);

    expect(actual).toEqual(res);
  });

  test('create object for info page for country wich not has capital and currencies', () => {
    const data = {
      population: 100000,
      region: 'Americas',
      subregion: 'South America',
    };

    const res = {
      Population: '100,000',
      Region: 'Americas',
      Subregion: 'South America',
      Capital: 'no capital',
      Currencies: 'no currencies',
    };

    const actual = getInfoList(data);

    expect(actual).toEqual(res);
    expect(res.Capital).toBe('no capital');
    expect(res.Currencies).toBe('no currencies');
  });
});

describe('Search, filters and sort functions', () => {
  const data = [
    {
      name: {
        common: 'Peru',
      },
      region: 'Americas',
      population: 32971846,
    },
    {
      name: {
        common: 'Argentina',
      },
      region: 'Americas',
      population: 250000000,
    },
    {
      name: {
        common: 'Russia',
      },
      region: 'Eroup',
      population: 300000000,
    },
  ];

  test('test search function if query is empty', () => {
    const actual = transformData.search(data, '');

    expect(actual).toEqual(data);
    expect(actual.length).toBe(3);
  });

  test('test search function', () => {
    const actual = transformData.search(data, 'argentina');
    const res = [data[1]];

    expect(actual).toEqual(res);
    expect(actual.length).toBe(1);
  });

  test('test filter function', () => {
    const actual = transformData.filter(data, 'americas');
    const res = data.slice(0, 2);

    expect(actual).toEqual(res);
  });

  test('test sort function by country name', () => {
    const actual = transformData
      .sort(data, 'name')
      .map(({ name }) => name.common);
    const res = ['Argentina', 'Peru', 'Russia'];

    expect(actual).toEqual(res);
  });

  test('test sort function by country population', () => {
    const actual = transformData
      .sort(data, 'population')
      .map(({ name }) => name.common);

    const res = ['Russia', 'Argentina', 'Peru'];

    expect(actual).toEqual(res);
  });
});
