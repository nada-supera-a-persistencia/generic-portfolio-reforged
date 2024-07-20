import './styles.css';

export default function PortfolioHeader() {
  return (
    <header>
      <a className="header-option" href="#home">
        Home
      </a>
      <a className="header-option" href="#projects">
        Projects
      </a>
      <a className="header-option" href="#about">
        About
      </a>
      <a className="header-option" href="#stacks">
        Techs
      </a>
    </header>
  );
}
