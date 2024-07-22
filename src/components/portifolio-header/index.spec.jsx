import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import PortfolioHeader from '.';

describe('PortfolioHeader', () => {
  beforeEach(() => {
    render(<PortfolioHeader />);
  });

  test('Should render all links', async () => {
    const group = await screen.findByRole('group');

    expect(group).toBeInTheDocument();
    expect(group.childElementCount).toBe(4);
  });

  test('Should render home link', async () => {
    const homeText = /Home/i;
    const homeElement = await screen.findByText(homeText);

    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveAttribute('href', '#home');
  });

  test('Should render projects link', async () => {
    const projectsText = /projects/i;
    const projectsElement = await screen.findByText(projectsText);

    expect(projectsElement).toBeInTheDocument();
    expect(projectsElement).toHaveAttribute('href', '#projects');
  });

  test('Should render about link', async () => {
    const aboutText = /About/i;
    const aboutElement = await screen.findByText(aboutText);

    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveAttribute('href', '#about');
  });

  test('Should render stack link', async () => {
    const stackText = /Techs/i;
    const stackElement = await screen.findByText(stackText);

    expect(stackElement).toBeInTheDocument();
    expect(stackElement).toHaveAttribute('href', '#stacks');
  });
});
