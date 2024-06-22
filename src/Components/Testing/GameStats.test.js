import React from 'react';
import { render, screen } from '@testing-library/react';
import GameStats from '../Main/GameStats';



describe('GameStats', () => {
    it('renders game statistics correctly', () => {
      // Render the component
      render(<GameStats />);
      });
    });