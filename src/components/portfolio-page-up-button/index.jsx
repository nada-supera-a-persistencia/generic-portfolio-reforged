import './styles.css';
import { FaArrowUp } from 'react-icons/fa';

export default function PortfolioPageUpButton() {
  return (
    <button href="#home" className="btn-top" role="button">
      <FaArrowUp />
    </button>
  );
}
