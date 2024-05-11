import './styles.css';

export default function PortfolioHeader() {
  return (
    <div className="top" role="group">
      <a className="link" href="#home">
        Inicio
      </a>
      <a className="link" href="#projects">
        Projetos
      </a>
      <a className="link" href="#about">
        Sobre
      </a>
      <a className="link" href="#stacks">
        Tecnologias
      </a>
    </div>
  );
}
