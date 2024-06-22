import React from 'react';
import { render } from '@testing-library/react';
import Socials from '../Main/Socials'; 
import { Timeline } from 'react-twitter-widgets';


// Mock the Twitter Timeline
jest.mock('react-twitter-widgets', () => ({
  Timeline: () => <div data-testid="mocked-timeline">Mocked Timeline</div>,
}));

describe('Socials component', () => {
  it('renders socials component with mocked timeline', () => {
    const { getByText, getByTestId } = render(<Socials />);

    // Check if socials heading is rendered
    expect(getByText('SOCIALS')).toBeInTheDocument();

    // Check if the mocked timeline component is rendered
    expect(getByTestId('mocked-timeline')).toBeInTheDocument();

  });
});