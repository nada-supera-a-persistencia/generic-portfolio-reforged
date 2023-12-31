import './App.css';
import html from './img/html.png';
import css from './img/css.png';
import js from './img/js.png';
import react from './img/react-logo-1.png';
import ts from './img/Typescript.png';
import csharp from './img/csharp.png';
import postgre from './img/postgres-icon-27.jpg';
import construcao from './img/emConstrucao.svg' 

function App() {
  return (
    <>
      <a href="#home" className="btn-top"><i className="fa fa-arrow-up"></i></a>
      <div className="container-full" id="home">
        <span></span>

        <div className="container-col-1">
          <div className="top">
            <a className="link">Home</a>
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
            <a className="download" target="_blank" href="https://drive.google.com/drive/folders/1iO00Wvj_yDvbkN84Tf13IeWFjIO7KuCI?usp=sharing">
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
              <img className="image" src={construcao} alt="Imagem do Projeto" />
              <h1>pass-app</h1>
              <p>
                Projeto App Gerador de senhas com caracteres especiais, podendo
                ser escolhidos de 6 a 20 caracteres aleatórios para gerar uma
                senha, e salva-lá. Com possibilidade de copia-lá para área de
                transferência
              </p>
              <h3>#react-native &nbsp; #JS &nbsp; #EXPO &nbsp;</h3>
            </div>
            <div className="buttons-group">
              <a href="https://github.com/dmresende/password-app" target="_blank" className="card-button">Código</a>
              <a href="https://drive.google.com/file/d/1fAHnrgDibavRImDVaI-I0r272uTL_gsW/view?usp=drive_link" target="_blank" className="card-button">Projeto</a>
            </div>
          </div>

          {/* Card_02 */}
          {/* <div className="card"> */}
            {/* Pinned */}
            {/* <span className="fixed"><i className="fa fa-star fa-2x"></i></span>
            <div className="card-body">
              <img className="image" src={construcao} alt="Imagem do Projeto" />
              <h1>pass-app</h1>
              <p>
                Projeto App Gerador de senhas com caracteres especiais, podendo
                ser escolhidos de 6 a 20 caracteres aleatórios para gerar uma
                senha, e salva-lá. Com possibilidade de copia-lá para área de
                transferência
              </p>
              <h3>#react-native &nbsp; #JS &nbsp; #EXPO &nbsp;</h3>
            </div>
            <div className="buttons-group">
              <a href="https://github.com/dmresende/password-app" target="_blank" className="card-button">Código</a>
              <a href="https://drive.google.com/file/d/1fAHnrgDibavRImDVaI-I0r272uTL_gsW/view?usp=drive_link" target="_blank" className="card-button">Projeto</a>
            </div>
          </div> */}
        </div>
      </div>

      <div className="container-full">
        <div className="about" id="sobre_mim">
          <h1>Sobre mim</h1>
          <p>
            Sou um entusiasta da tecnologia e apaixonado por inovação. Estou
            constantemente em busca de novas experiências e desafios que possam
            enriquecer minha jornada profissional. Acredito no poder do
            aprendizado contínuo e na colaboração como pilares essenciais para o
            crescimento pessoal e profissional.Minha formação em Direito
            contribuiu para o desenvolvimento de um pensamento analítico e
            crítico, habilidades que aplico na resolução de problemas no mundo da
            tecnologia. No entanto, foi quando fiz meu primeiro curso livre de
            programação que descobri minha verdadeira paixão. Atualmente, estou me
            dedicando ao desenvolvimento de habilidades de programação e me
            tornando um profissional nesta área que tanto amo.
          </p>
          <br />
          <p>
            No momento, estou atuo no desenvolvimento de sistemas de gestão
            CRM/ERP. Utilizo uma variedade de tecnologias, incluindo Visual Basic,
            C#, SSMS, AngularJS e React Native, para criar soluções eficientes e
            personalizadas. Estou em constante busca por conhecimento no campo do
            desenvolvimento de software e estou empolgado em aprender e aplicar
            novas tecnologias para criar soluções cada vez melhores.
          </p>
          <p>
          Adoraria me conectar com você! Se você compartilha interesses semelhantes ou deseja trocar ideias, sinta-se à vontade para entrar em contato comigo. Você pode me encontrar nas minhas redes. Obrigado por visitar minha página pessoal em construção. Fique à vontade para explorar e volte em breve para conferir as atualizações
          </p>

        </div>

        
      </div>

      {/* <!--Tecnologias--> */}
      <div className="badges">
          <img className='badges img' src={html} alt="html" />
          <img className='badges img' src={css} alt="css" />
          <img className='badges img' src={js} alt="js" />
          <img className='badges img' src={react} alt="react/react-native" />
          <img className='badges img' src={ts} alt="postgres" />
          <img className='badges img' src={csharp} alt="csharp" />
          <img className='badges img' src={postgre} alt="postgres" />
        </div>

      <footer>
        <p>@2023 - Douglas Resende</p>
      </footer>

      <link
        rel="stylesheet"
        href="https://cdn.es.gov.br/fonts/font-awesome/css/font-awesome.min.css"
      />

    </>
  );
}

export default App;
