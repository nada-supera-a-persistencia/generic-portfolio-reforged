import PortfolioPageUpButton from '../src/components/portfolio-page-up-button';
import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('PortfolioPageUpButton', () => {
  beforeEach(() => {
    render(<PortfolioPageUpButton />);
  });

  test('Should render button with correct href attribute', async () => {
    const button = await screen.findByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '#home');
  });

  test('Should button contain svg', async () => {
    const button = await screen.findByRole('button');

    expect(button.querySelector('svg')).toBeInTheDocument();
  });
});
