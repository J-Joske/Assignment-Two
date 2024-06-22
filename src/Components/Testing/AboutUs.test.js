import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutUs from '../Main/AboutUs';

test('renders an h2 element', () => {
  render(<AboutUs />);
  
  // Check if the h2 element is in the document
  const h2Element = screen.getByText('HISTORY');
  expect(h2Element).toBeInTheDocument();
});
