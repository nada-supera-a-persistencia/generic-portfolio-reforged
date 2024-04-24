import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiCsharp,
  SiExpo,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiTypescript,
} from 'react-icons/si';
import './styles.css';

export default function PortfolioStacks() {
  return (
    <>
      <h1 className="titles" id="stacks">
        TECNOLOGIAS
      </h1>
      <div className="badges">
        <FaHtml5
          className="badges img"
          color="var(--color-html-icon)"
          size={50}
        />
        <FaCss3Alt
          className="badges img"
          color="var(--color-css-icon)"
          size={50}
        />
        <IoLogoJavascript
          className="badges img"
          color="var(--color-js-icon)"
          size={50}
        />
        <FaReact
          className="badges img"
          color="var(--color-react-icon)"
          size={50}
        />
        <SiTypescript
          className="badges img"
          color="var(--color-ts-icon)"
          size={50}
        />
        <SiExpo
          className="badges img"
          color="var(--color-expo-icon)"
          size={50}
        />
        <SiCsharp
          className="badges img"
          color="var(--color-csharp-icon)"
          size={50}
        />
        <SiMicrosoftsqlserver
          className="badges img"
          color="var(--color-sql-server-icon)"
          size={50}
        />
        <SiPostgresql
          className="badges img"
          color="var(--color-postgress-icon)"
          size={50}
        />
      </div>
    </>
  );
}
