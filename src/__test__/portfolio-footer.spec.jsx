import PortfolioFooter from '../components/portfolio-footer';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('PortfolioFooter', () => {
  test('renders', () => {
    // ARRANGE

    // ACT

    // ASSERT
    render(<PortfolioFooter />);

    expect(screen.getByRole('contentinfo')).toBeDefined();
    expect(screen.getByText(/hello world/i)).toBeDefined();
  });
});
