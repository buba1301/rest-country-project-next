/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from './Button';

test('render button', async () => {
  const handleClick = jest.fn();
  render(<Button text="Click me" size="xl" onClick={handleClick} />);

  const button = screen.getByText(/click me/i);

  expect(button).toBeInTheDocument();

  await userEvent.click(button);

  expect(handleClick).toBeCalled();
});
