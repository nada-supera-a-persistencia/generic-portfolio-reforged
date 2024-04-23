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

import "./styles.css";

export default function PortfolioStacks() {
  return (
    <>
      <h1 className="titles" id="stacks">
        TECNOLOGIAS
      </h1>
      <div className="badges">
        <FaHtml5
          className="badges img"
          color="var(--color_html_icon)"
          size={50}
        />
        <FaCss3Alt
          className="badges img"
          color="var(--color_css_icon)"
          size={50}
        />
        <IoLogoJavascript
          className="badges img"
          color="var(--color_js_icon)"
          size={50}
        />
        <FaReact
          className="badges img"
          color="var(--color_react_icon)"
          size={50}
        />
        <SiTypescript
          className="badges img"
          color="var(--color_ts_icon)"
          size={50}
        />
        <SiExpo
          className="badges img"
          color="var(--color_expo_icon)"
          size={50}
        />
        <SiCsharp
          className="badges img"
          color="var(--color_csharp_icon)"
          size={50}
        />
        <SiMicrosoftsqlserver
          className="badges img"
          color="var(--color_sqlServer_icon)"
          size={50}
        />
        <SiPostgresql
          className="badges img"
          color="var(--color_postgress_icon)"
          size={50}
        />
      </div>
    </>
  );
}
