import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../../Alert.js';

test('displays an error message', () => {
  const { getByText } = render(<Alert message="Error!" />);

  expect(getByText(/Error/).textContent).toBe('Error!');
});

test('displays a success message', () => {
  const { getByText } = render(<Alert message="Success!" />);

  expect(getByText(/Success/).textContent).toBe('Success!');
});
