/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Search from './Search';

test('render Search component and type search text', async () => {
  render(<Search />);
  const input = screen.getByPlaceholderText(/search.../i);
  expect(input).toBeInTheDocument();

  await userEvent.type(input, 'Argentina');
  expect(input).toHaveValue('Argentina');
});
