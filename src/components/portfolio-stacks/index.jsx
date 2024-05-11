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
  const iconSize = 50;

  return (
    <>
      <h1 className="title" id="stacks">
        TECNOLOGIAS
      </h1>
      <div className="icon-group" role="contentinfo">
        <FaHtml5 color="var(--color-html)" size={iconSize} />
        <FaCss3Alt color="var(--color-css)" size={iconSize} />
        <IoLogoJavascript color="var(--color-js)" size={iconSize} />
        <FaReact color="var(--color-react)" size={iconSize} />
        <SiTypescript color="var(--color-ts)" size={iconSize} />
        <SiExpo color="var(--color-expo)" size={iconSize} />
        <SiCsharp color="var(--color-csharp)" size={iconSize} />
        <SiMicrosoftsqlserver color="var(--color-sql-server)" size={iconSize} />
        <SiPostgresql color="var(--color-postgress-icon)" size={iconSize} />
      </div>
    </>
  );
}
