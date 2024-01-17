import './App.css';
import html from './img/html.png';
import css from './img/css.png';
import js from './img/js.png';
import react from './img/react-logo-1.png';
import ts from './img/Typescript.png';
import csharp from './img/csharp.png';
import postgre from './img/postgres.jpg';
import construcao from './img/emConstrucao.svg';
import expo from './img/expo.png';
import node from './img/node.png';
import express from './img/express.png';
import passApp from './img/passApp.png';
import heatmap from './img/heatmap.png';
import portifolio from './img/portifolio.png';

function App() {
  return (
    <>
      <a href="#home" className="btn-top"><i className="fa fa-arrow-up"></i></a>
      <div className="container-full" id="home">
        <span></span>

        <div className="container-col-1">
          <div className="top">
            <a className="link">Home</a>
            <a className="link" href="#projetos">Projetos</a>
            <a className="link" href="#sobre_mim">Sobre mim</a>
          </div>

          <div className="center">
            <div className="group">
              <a href="https://www.linkedin.com/in/douglasmresende/" target="_blank">
                <button><i className="fa fa-linkedin fa-2x"></i></button>
              </a>
              <a href="https://github.com/dmresende" target="_blank">
                <button><i className="fa fa-github fa-3x"></i></button>
              </a>
              <a href="mailto:douglasmresende@gmail.com">
                <button><i className="fa fa-envelope fa-2x"></i></button>
              </a>
            </div>
            <span className="border-badge"></span>
            <span className="badge"> hello world_ </span>
            <h1 className="title">Douglas Resende</h1>
            <p className="subtitle">Desenvolvedor de Software</p>
            <a className="download" target="_blank" href="https://drive.google.com/file/d/1OKlDjpNGR6KSZirzUxAbSIIFteaWD-UP/view?usp=sharing">
              <i className="fa fa-file"></i> &nbsp;Download Curriculo
            </a>
          </div>
        </div>

        <div className="container-col-2">
          <div className="profile"></div>
        </div>
      </div>

      <div className="container-full" id="projetos">
        <span className="projects"></span>
        <div className="card-group">

          {/* Card_01 */}
          <div className="card">
            {/* Pinned */}
            <span className="fixed"><i className="fa fa-star fa-2x"></i></span>
            <div className="card-body">
              <img className="image" src={passApp} alt="Imagem do Projeto" />
              <h1>pass-app</h1>
              <p>
                Projeto App Gerador de senhas com caracteres especiais. Escolha quantos caracteres terá sua senha que salvamos para você.
              </p>
              <div className="projetoIcon">
                <img className="projetoIcon img" src={react} alt="react/react-native" />
                <img className='projetoIcon img' src={js} alt="js" />
                <img className='projetoIcon img' src={expo} alt="expo" />
              </div>
            </div>

            <div className="buttons-group">
              <a href="https://github.com/dmresende/password-app" target="_blank" className="card-button">Código</a>
              <a href="https://drive.google.com/drive/folders/1iO00Wvj_yDvbkN84Tf13IeWFjIO7KuCI" target="_blank" className="card-button">Projeto</a>
            </div>
          </div>

          {/* Card_02 */}
          <div className="card">
            {/* Pinned */}
            <span className="fixed"><i className="fa fa-star fa-2x"></i></span>
            <div className="card-body">
              <img className="image" src={heatmap} alt="Imagem do Projeto" />
              <h1>heatemap+</h1>
              <p>
                Projeto em parceria com Brisa, Softex, Unoesc e Governo Federal.
                Produção de um Heatmap em equipe. Solicite acesso.
              </p>
              <div className="projetoIcon">
                <img className="projetoIcon img" src={html} alt="react/react-native" />
                <img className='projetoIcon img' src={css} alt="js" />
                <img className='projetoIcon img' src={js} alt="expo" />
                <img className='projetoIcon img' src={node} alt="expo" />
                <img className='projetoIcon img' src={express} alt="expo" />
                {/* <img className='projetoIcon img' src={postgre} alt="expo" /> */}
              </div>

            </div>
            <div className="buttons-group">
              <a href="https://github.com/dmresende/brisaEcombr" target="_blank" className="card-button">Código</a>
              <a href="mailto:douglasmresende@gmail.com" target="_blank" className="card-button">Solicite</a>
            </div>
          </div>

          {/* Card_03 */}
          <div className="card">
            {/* Pinned */}
            <span className="fixed"><i className="fa fa-star fa-2x"></i></span>
            <div className="card-body">
              <img className="image" src={portifolio} alt="Imagem do Projeto" />
              <h1>Repositório</h1>
              <p>
                Projeto visa publicações e atualizações dos meus projetos dento de um contexto de portifólio. Sempre em construção.
              </p>
              <div className="projetoIcon">
                <img className="projetoIcon img" src={react} alt="react/react-native" />
                <img className='projetoIcon img' src={js} alt="js" />
                <img className='projetoIcon img' src={css} alt="css" />
              </div>
              {/*               
              <h3>#react-native &nbsp; #JS &nbsp; #EXPO &nbsp;</h3> */}
            </div>
            <div className="buttons-group">
              <a href="https://github.com/dmresende/portifolioresende" target="_blank" className="card-button">Código</a>
              <a href="https://portifolioresende.vercel.app/" target="_blank" className="card-button">Projeto</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-full">
        <div className="about" id="sobre_mim">
          <h1>Sobre mim</h1>
          <p>
            Olá visitante!
            Segue um breve resumo sobre minha jornada!
            Iniciei minha jornada em 2017, onde tive meus primeiros contato com a programação com cursos livres, e uma ajuda imensa de amigos que estavam determinados a compartilhar seus conhecimentos.
            Sempre tive muito apresso por tecnologia, sempre me encantou entender , e entender integralmente, como essas maravilhas tecnológicas funcionam por trás.
            Em 2019 me Graduei em Direito pelo Centro Universitário Newton Paiva, aprovado pelo Exame XXX Nacional da OAB, sim, isso meu contato com a programação ocorreu durante meus ultimos semestres de faculade e aprovação no exame da ordem.
          </p>
          <br />
          <p>
            Em 2021 iniciei minha transição de carreira, e comecei a trilhar o caminho profissional de um Desenvolvedor de Software!
            Nesse mesmo ano consegui minha primeira oportunidade atuand no desenvolvimento de sistemas de gestão CRM/ERP.
            Atualmente, estou me dedicando ao desenvolver minhas habilidades em programação e me dedicando a me tornar cada vez mais qualificado.
          </p>
          <p>
            Adoraria me conectar com você! Se você compartilha interesses semelhantes ou deseja trocar ideias, sinta-se à vontade para entrar em contato comigo. Você pode me encontrar nas minhas redes. Obrigado por visitar minha página pessoal em construção. Fique à vontade para explorar e volte em breve para conferir as atualizações
          </p>

        </div>


      </div>

      {/* <!--Tecnologias--> */}
      <h3 className='stacks'>stacks</h3>
      <div className="badges">
        <img className='badges img' src={html} alt="html" />
        <img className='badges img' src={css} alt="css" />
        <img className='badges img' src={js} alt="js" />
        <img className='badges img' src={react} alt="react/react-native" />
        <img className='badges img' src={expo} alt="expo" />
        <img className='badges img' src={ts} alt="postgres" />
        <img className='badges img' src={csharp} alt="csharp" />
        <img className='badges img' src={postgre} alt="postgres" />
      </div>

      <footer>
        <p className='rodape'>@2023 - Douglas Resende</p>
      </footer>

      <link
        rel="stylesheet"
        href="https://cdn.es.gov.br/fonts/font-awesome/css/font-awesome.min.css"
      />

    </>
  );
}

export default App;
