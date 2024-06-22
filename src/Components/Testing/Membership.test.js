import React from 'react';
import { render } from '@testing-library/react';
import Membership from '../Main/Membership';

describe('Membership Component', () => {
  it('renders membership section with an image and a button', () => {
    const { getByText, getByAltText } = render(<Membership />);

    // Check if the component renders with the correct title
    expect(getByText('MEMBERSHIP')).toBeInTheDocument();

    // Check if the image is rendered with alt text
    expect(getByAltText('fans')).toBeInTheDocument();

  });
});