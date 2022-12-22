/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

test('render card component', () => {
  render(<Card name="Argentina" population="100" region="Americas" capital="Aires" />);

  const flagImg = screen.getByAltText(/flag image/i);
  expect(flagImg).toBeInTheDocument();

  const props = [/Argentina/i, /100/i, /americas/i, /aires/i];

  props
    .map((value) => screen.getByText(value))
    .forEach((element) => expect(element).toBeInTheDocument());
});
