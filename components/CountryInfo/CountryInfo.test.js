/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import CountryInfo from './CountryInfo';

const info = {
  Population: '100,000',
  Region: 'Americas',
  Subregion: 'South America',
  Capital: 'Buenos Aires',
  Currencies: 'ARS',
};

test('render countryInfo component', async () => {
  render(<CountryInfo infoList={info} borders={['BOL', 'CHI']} />);

  Object.values(info)
    .map((value) => screen.getByText(value))
    .forEach((value) => expect(value).toBeInTheDocument());

  const borderName = screen.getByText(/bol/i);

  expect(borderName).toBeInTheDocument();
});
