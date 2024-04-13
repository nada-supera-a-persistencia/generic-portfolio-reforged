import React from "react";
import "./style.css";

export default function Header() {
  return (
    <>
      <div className="top">
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
    </>
  );
}
