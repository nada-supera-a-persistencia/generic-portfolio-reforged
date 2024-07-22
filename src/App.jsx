import './App.css';
import portfolioData from './../data.json';
import PortfolioFooter from './components/portfolio-footer/index';
import PortfolioPageUpButton from './components/portfolio-page-up-button';
import PortfolioStacks from './components/portfolio-stacks';
import PortfolioHeader from './components/portifolio-header/index';

export default function App() {
  const {
    name,
    role,
    summary,
    resumeUrl,
    profilePicture,
    socialNetworks,
    projects,
    techStackIcons,
  } = portfolioData;

  return (
    <>
      {/* Back home button */}
      <PortfolioPageUpButton />

      <div className="container-full" id="home">
        <div className="container-col-1">
          {/* Header */}
          <PortfolioHeader />

          <div className="center">
            {/* Social Networks */}
            <div className="group">
              {socialNetworks.map((network, index) => (
                <a
                  key={index}
                  href={network.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <button>
                    <i className={`fa ${network.icon} fa-2x`}></i>
                  </button>
                </a>
              ))}
            </div>
            <span className="border-badge"></span>
            <span className="badge"> hello world_ </span>
            <h1 className="title">{name}</h1>
            <p className="subtitle">{role}</p>
            <a
              className="download"
              rel="noreferrer"
              target="_blank"
              href={resumeUrl}
            >
              <i className="fa fa-file"></i> &nbsp;Download resume
            </a>
          </div>
        </div>

        <div className="container-col-2">
          <div
            className="profile"
            style={{ backgroundImage: `url(${profilePicture})` }}
          ></div>
        </div>
      </div>

      {/* Projects */}
      <h1 className="titles" id="projects">
        PROJECTS
      </h1>
      <div className="container-full">
        <div className="card-group">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <span className="fixed">
                <i className="fa fa-star fa-2x"></i>
              </span>
              <div className="card-body">
                <img
                  className="image"
                  src={project.image}
                  alt="Project Image"
                />
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <div className="project-icon">
                  {project.techStackIcons.map((icon, iconIndex) => (
                    <img
                      key={iconIndex}
                      className="project-icon img"
                      src={icon}
                      alt={icon}
                    />
                  ))}
                </div>
                <div className="buttons-group">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="card-button"
                  >
                    Acess code
                  </a>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="card-button"
                  >
                    Acess project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="container-full">
        <div className="about" id="about">
          <h1>About</h1>
          <p>{summary}</p>
        </div>
      </div>

      {/* Technologies */}
      <PortfolioStacks icons={techStackIcons} />

      {/* Footer */}
      <PortfolioFooter />
    </>
  );
}
