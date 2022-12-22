/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Header from './Header';

test('render Header component', async () => {
  render(<Header />);

  const button = screen.getByText(/light mode/i);

  expect(button).toBeInTheDocument();

  await userEvent.click(button);

  expect(button).toHaveTextContent(/dark mode/i);
});
