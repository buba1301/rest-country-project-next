/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import DropDown from './DropDown';

test('render DropDown component', async () => {
  const values = ['Name', 'Population', 'Reset'];
  render(<DropDown values={values} name="Sort" />);

  const button = screen.getByText(/sort/i);
  const listClose = screen.queryByRole('listbox');

  expect(button).toBeInTheDocument();
  expect(listClose).not.toBeInTheDocument();

  await userEvent.click(button);

  const listOpen = screen.getByRole('listbox');
  const nameItem = screen.getByText(/name/i);

  expect(listOpen).toBeInTheDocument();
  expect(nameItem).toBeInTheDocument();

  await userEvent.click(nameItem);

  expect(listClose).not.toBeInTheDocument();
});
