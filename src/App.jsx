import "./App.css";
import html from "./img/html.png";
import css from "./img/css.png";
import cssPB from "./img/cssPB.png";
import js from "./img/js.png";
import jsPB from "./img/jsPB.png";
import react from "./img/react-logo-1.png";
import reactPB from "./img/react-logo-1PB.png";
import ts from "./img/Typescript.png";
import csharp from "./img/csharp.png";
import sqlserver from "./img/sqlserver.png";
import postgre from "./img/postgres.jpg";
import expo from "./img/expo.png";
import nodePB from "./img/nodePB.png";
import express from "./img/express.png";
import passApp from "./img/passApp.png";
import heatmap from "./img/heatmap.png";
import portifolio from "./img/portifolio.png";
import PortfolioFooter from "./components/portfolio-footer/index";
import UpPage from "./components/portifolio-up-page";
import Header from "./components/portifolio-header";

export default function App() {
  return (
    <>
      <UpPage />

      <div className="container-full" id="home">
        <span></span>

        <div className="container-col-1">
          <Header />

          <div className="center">
            <div className="group">
              <a
                href="https://www.linkedin.com/in/douglasmresende/"
                rel="noreferrer"
                target="_blank"
              >
                <button>
                  <i className="fa fa-linkedin fa-2x"></i>
                </button>
              </a>
              <a
                href="https://github.com/dmresende"
                rel="noreferrer"
                target="_blank"
              >
                <button>
                  <i className="fa fa-github fa-3x"></i>
                </button>
              </a>
              <a href="mailto:douglasmresende@gmail.com">
                <button>
                  <i className="fa fa-envelope fa-2x"></i>
                </button>
              </a>
            </div>
            <span className="border-badge"></span>
            <span className="badge"> hello world_ </span>
            <h1 className="title">Douglas Resende</h1>
            <p className="subtitle">Desenvolvedor de Software</p>
            <a
              className="download"
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1W6S0l5c8fpYhT53fAcE6a1QQuXmguMZF/view?usp=sharing"
            >
              <i className="fa fa-file"></i> &nbsp;Download Curriculo
            </a>
          </div>
        </div>

        <div className="container-col-2">
          <div className="profile"></div>
        </div>
      </div>

      <h1 className="titles" id="projects">
        PROJETOS
      </h1>
      <div className="container-full">
        <div className="card-group">
          {/* Card_01 */}
          <div className="card">
            {/* Pinned */}
            <span className="fixed">
              <i className="fa fa-star fa-2x"></i>
            </span>
            <div className="card-body">
              <img className="image" src={passApp} alt="Imagem do Projeto" />
              <h1>pass-app</h1>
              <p>
                Projeto App Gerador de senhas. Escolha quantos caracteres terá
                sua senha que salvamos para você.
              </p>
              <div className="projetoIcon">
                <img
                  className="projetoIcon img"
                  src={reactPB}
                  alt="react/react-native"
                />
                <img className="projetoIcon img" src={jsPB} alt="js" />
                <img className="projetoIcon img" src={expo} alt="expo" />
              </div>
              <div className="buttons-group">
                <a
                  href="https://github.com/dmresende/password-app"
                  target="_blank"
                  rel="noreferrer"
                  className="card-button"
                >
                  CÓDIGO
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1iO00Wvj_yDvbkN84Tf13IeWFjIO7KuCI"
                  target="_blank"
                  rel="noreferrer"
                  className="card-button"
                >
                  PROJETO
                </a>
              </div>
            </div>
          </div>

          {/* Card_02 */}
          <div className="card">
            {/* Pinned */}
            <span className="fixed">
              <i className="fa fa-star fa-2x"></i>
            </span>
            <div className="card-body">
              <img className="image" src={heatmap} alt="Imagem do Projeto" />
              <h1>heatemap+</h1>
              <p>
                Projeto em parceria com Brisa, Unoesc e Governo Federal.
                Produção de um Heatmap em equipe.
              </p>
              <div className="projetoIcon">
                <img className="projetoIcon img" src={jsPB} alt="jsPB" />
                <img className="projetoIcon img" src={nodePB} alt="nodePB" />
                <img className="projetoIcon img" src={express} alt="express" />
              </div>
              <div className="buttons-group">
                <a
                  href="https://github.com/dmresende/brisaEcombr"
                  target="_blank"
                  rel="noreferrer"
                  className="card-button"
                >
                  CÓDIGO
                </a>
                <a
                  href="mailto:douglasmresende@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="card-button"
                >
                  SOLICITE
                </a>
              </div>
            </div>
          </div>

          {/* Card_03 */}
          <div className="card">
            {/* Pinned */}
            <span className="fixed">
              <i className="fa fa-star fa-2x"></i>
            </span>
            <div className="card-body">
              <img className="image" src={portifolio} alt="Imagem do Projeto" />
              <h1>Repositório</h1>
              <p>
                Projeto publicações e atualizações dos meus projetos em um
                portifólio. Em construção.
              </p>
              <div className="projetoIcon">
                <img
                  className="projetoIcon img"
                  src={reactPB}
                  alt="react/react-native"
                />
                <img className="projetoIcon img" src={jsPB} alt="js" />
                <img className="projetoIcon img" src={cssPB} alt="css" />
              </div>
              {/*               
              <h3>#react-native &nbsp; #JS &nbsp; #EXPO &nbsp;</h3> */}
            </div>
            <div className="buttons-group">
              <a
                href="https://github.com/dmresende/portifolioresende"
                target="_blank"
                rel="noreferrer"
                className="card-button"
              >
                CÓDIGO
              </a>
              <a
                href="https://portifolioresende.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="card-button"
              >
                PROJETO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-full">
        <div className="about" id="about">
          <h1>SOBRE</h1>
          <p>
            Olá visitante, segue um breve resumo sobre minha jornada!
            <br />
            Iniciei minha jornada em 2017, onde tive meus primeiros contato com
            a programação com cursos livres, e uma ajuda imensa de amigos que
            estavam determinados a compartilhar seus conhecimentos. Sempre tive
            muito apresso por tecnologia, sempre me encantou entender , e
            entender integralmente, como essas maravilhas tecnológicas funcionam
            por trás. Em 2019 me Graduei em Direito pelo Centro Universitário
            Newton Paiva, aprovado pelo Exame XXX Nacional da OAB, sim, isso meu
            contato com a programação ocorreu durante meus ultimos semestres de
            faculade e aprovação no exame da ordem.
          </p>
          <br />
          <p>
            Em 2021 iniciei minha transição de carreira, e comecei a trilhar o
            caminho profissional de um Desenvolvedor de Software! Nesse mesmo
            ano consegui minha primeira oportunidade atuand no desenvolvimento
            de sistemas de gestão CRM/ERP. Atualmente, estou me dedicando ao
            desenvolver minhas habilidades em programação e me dedicando a me
            tornar cada vez mais qualificado.
          </p>
          <p>
            Adoraria me conectar com você! Se você compartilha interesses
            semelhantes ou deseja trocar ideias, sinta-se à vontade para entrar
            em contato comigo. Você pode me encontrar nas minhas redes. Obrigado
            por visitar minha página pessoal em construção. Fique à vontade para
            explorar e volte em breve para conferir as atualizações
          </p>
        </div>
      </div>

      {/* <!--Tecnologias--> */}
      <h1 className="titles" id="stacks">
        TECNOLOGIAS
      </h1>
      <div className="badges">
        <img className="badges img" src={html} alt="html" />
        <img className="badges img" src={css} alt="css" />
        <img className="badges img" src={js} alt="js" />
        <img className="badges img" src={react} alt="react/react-native" />
        <img className="badges img" src={expo} alt="expo" />
        <img className="badges img" src={ts} alt="postgres" />
        <img className="badges img" src={csharp} alt="csharp" />
        <img className="badges img" src={sqlserver} alt="sqlserver" />
        <img className="badges img" src={postgre} alt="postgres" />
      </div>

      {/* Portfolio footer */}
      <PortfolioFooter />

      <link
        rel="stylesheet"
        href="https://cdn.es.gov.br/fonts/font-awesome/css/font-awesome.min.css"
      />
    </>
  );
}
