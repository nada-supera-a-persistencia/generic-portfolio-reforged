import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiExpo,
  SiCsharp,
  SiTypescript,
  SiMicrosoftsqlserver,
  SiPostgresql,
} from "react-icons/si";

import "./style.css";

export default function PortfolioStacks() {
  return (
    <>
      <h1 className="titles" id="stacks">
        TECNOLOGIAS
      </h1>
      <div className="badges">
        <FaHtml5 className="badges img" color="#fc4407" size={50} />
        <FaCss3Alt className="badges img" color="#006BC0" size={50} />
        <IoLogoJavascript className="badges img" color="#F7E018" size={50} />
        <FaReact className="badges img" color="#26D9FD" size={50} />
        <SiTypescript className="badges img" color="#2F74C0" size={50} />
        <SiExpo className="badges img" color="#000000" size={50} />
        <SiCsharp className="badges img" color="#410096" size={50} />
        <SiMicrosoftsqlserver
          className="badges img"
          color="#CE4140"
          size={50}
        />
        <SiPostgresql className="badges img" color="#31648C" size={50} />
      </div>
    </>
  );
}
