import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from '../Main/PlayerProfiles';

describe('Carousel Component', () => {
  it('renders without crashing', () => {
    const { getByText, getByAltText } = render(<Carousel />);
    
    // Check if the heading is rendered
    expect(getByText('PLAYER PROFILES')).toBeInTheDocument();
    
    // Check if at least one of the carousels is rendered
    expect(getByAltText('player one')).toBeInTheDocument();
  });

  it('navigates to previous and next images correctly', () => {
    const { getByText, getByAltText } = render(<Carousel />);
    
    // check the initial carousel picture
    const initialImage = getByAltText('player one');
    expect(initialImage).toBeInTheDocument();

    // check the navigation buttons
    const prevButton = getByText('Prev');
    const nextButton = getByText('Next');

    // Click next button and check result
    fireEvent.click(nextButton);
    const nextImage = getByAltText('Player two');
    expect(nextImage).toBeInTheDocument();

    // Click prev button and check result
    fireEvent.click(prevButton);
    expect(initialImage).toBeInTheDocument();
  });
});
