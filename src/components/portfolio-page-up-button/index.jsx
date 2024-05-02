import './styles.css';
import { FaArrowUp } from 'react-icons/fa';

export default function PortfolioPageUpButton() {
  return (
    <a href="#home" className="btn-top" role="button">
      <FaArrowUp role="fa-arrow-up" />
    </a>
  );
}
