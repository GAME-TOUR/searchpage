import React from 'react';
import { render, screen } from '@testing-library/react';
import GameList from './GameList';

test('renders game review title', () => {
  render(<GameList />);
  const linkElement = screen.getByText(/game reviews/i);
  expect(linkElement).toBeInTheDocument();
});