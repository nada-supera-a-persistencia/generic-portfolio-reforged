import PortfolioFooter from '../src/components/portfolio-footer';
import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('PortfolioFooter', () => {
  beforeEach(() => {
    render(<PortfolioFooter />);
  });

  test('Should render the component', async () => {
    const footerText = /@2024 - generic-portfolio-reforged/i;
    const footerElement = await screen.findByText(footerText);

    expect(footerElement).toBeInTheDocument();
  });
});
