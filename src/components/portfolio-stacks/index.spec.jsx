import PortfolioStacks from '.';
import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import portfolioData from '../../../data.json';

describe('PortfolioStacks', () => {
  beforeEach(() => {
    render(<PortfolioStacks />);
  });

  test('Should render title `Techs` with correctly className', async () => {
    const title = /Techs/i;
    const h1Element = await screen.findByText(title);

    expect(h1Element).toHaveClass('title');
    expect(h1Element).toBeInTheDocument();
  });

  test('Should render all tech icons', async () => {
    const badgesElement = await screen.findByRole('contentinfo');
    const { techStackIcons } = portfolioData;
    const iconsLenght = techStackIcons.length;

    expect(badgesElement.childElementCount).toBe(iconsLenght);
  });

  test('Should have correct alt text for icons', async () => {
    const iconElements = await screen.findAllByRole('img');

    iconElements.forEach((iconElement, index) => {
      expect(iconElement).toHaveAttribute(
        'alt',
        `Ícone de tecnologia ${index + 1}`,
      );
    });
  });
});
