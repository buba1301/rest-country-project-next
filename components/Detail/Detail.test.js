/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Detail from './Detail';

const data = {
  flags: {
    svg: '',
  },
  name: {
    common: 'Argentina',
  },
  borders: [],
};

test('render Detail', () => {
  render(<Detail countryData={data} />);

  const back = screen.getByText(/back/i);
  const img = screen.getByAltText(/flag image/i);

  expect(back).toBeInTheDocument();
  expect(img).toBeInTheDocument();
});
