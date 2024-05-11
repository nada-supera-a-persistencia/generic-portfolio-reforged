import PortfolioStacks from '../src/components/portfolio-stacks';
import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('PortfolioStacks', () => {
  beforeEach(() => {
    render(<PortfolioStacks />);
  });

  test('Should render title `TECNOLOGIAS` with correctly className', async () => {
    const title = /TECNOLOGIAS/i;
    const h1Element = await screen.findByText(title);

    expect(h1Element).toHaveClass('titles');
    expect(h1Element).toBeInTheDocument();
  });

  test('Should render all tech icons', async () => {
    const badgesElement = await screen.findByRole('contentinfo');
    const iconsLenght = 9;

    expect(badgesElement.childElementCount).toBe(iconsLenght);
  });
});
