import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hi there keeper', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hi there keeper/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders kick this thing', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/let\'s kick this thing/i);
    expect(linkElement).toBeInTheDocument();
});

