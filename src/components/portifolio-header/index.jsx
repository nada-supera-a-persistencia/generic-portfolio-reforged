import './styles.css';

export default function PortfolioHeader() {
  return (
    <header role="group">
      <a className="header-option" href="#home">
        Inicio
      </a>
      <a className="header-option" href="#projects">
        Projetos
      </a>
      <a className="header-option" href="#about">
        Sobre
      </a>
      <a className="header-option" href="#stacks">
        Tecnologias
      </a>
    </header>
  );
}
