import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondiciona';
import Boton from './components/Boton';
import CicloVida from './components/CicloVida';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <RelojHooks/>
          <ScrollHooks></ScrollHooks>
          <ContadorHooks></ContadorHooks>
          <hr/>
          <Boton></Boton>
          <CicloVida></CicloVida>
          <Componente msg="hola soy brayian Ramirez"></Componente>
          <hr/>
          <Propiedades></Propiedades>
          <hr/>
          <Estado></Estado>
          <hr/>
          <RenderizadoCondicional></RenderizadoCondicional>
        </section> 
      </header>
      
    </div>
  );
}

export default App;
