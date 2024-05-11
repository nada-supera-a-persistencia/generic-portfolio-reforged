import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import PortfolioHeader from '../src/components/portifolio-header';

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
    const homeText = /Inicio/i;
    const homeElement = await screen.findByText(homeText);

    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveAttribute('href', '#home');
    expect(homeElement).toHaveClass('link');
  });

  test('Should render projects link', async () => {
    const projectsText = /Projetos/i;
    const projectsElement = await screen.findByText(projectsText);

    expect(projectsElement).toBeInTheDocument();
    expect(projectsElement).toHaveAttribute('href', '#projects');
    expect(projectsElement).toHaveClass('link');
  });

  test('Should render about link', async () => {
    const aboutText = /Sobre/i;
    const aboutElement = await screen.findByText(aboutText);

    
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveAttribute('href', '#about');
    expect(aboutElement).toHaveClass('link');
  });

  test('Should render stack link', async () => {
    const stackText = /Tecnologias/i;
    const stackElement = await screen.findByText(stackText);

    expect(stackElement).toBeInTheDocument();
    expect(stackElement).toHaveAttribute('href', '#stacks');
    expect(stackElement).toHaveClass('link');
  });
});
