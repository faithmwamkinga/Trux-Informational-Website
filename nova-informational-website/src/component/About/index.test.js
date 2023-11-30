import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '.';

describe('About component', () => {
  it('renders the component', () => {
    render(<About />);
  });


    it('displays images', () => {
    render(<About />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(3); 
  });

  
});
