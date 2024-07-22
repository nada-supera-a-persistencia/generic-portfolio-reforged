import portfolioData from '../../../data.json';
import './styles.css';

export default function PortfolioStacks() {
  const { techStackIcons } = portfolioData;

  return (
    <>
      <h1 className="title" id="stacks">
        Techs
      </h1>
      <div className="icon-group">
        {techStackIcons.map((iconPath, index) => (
          <img
            key={index}
            src={iconPath}
            alt={`Ícone de tecnologia ${index + 1}`}
            style={{ width: 50, height: 50 }}
          />
        ))}
      </div>
    </>
  );
}
