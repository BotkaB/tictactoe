
import './App.css';
import Jatekter from './components/Jatekter';

function App() {

  const lista = ["", "", "O", "", "X", "", "", "", "O"]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
        <article>
          <div className="jatekter"></div>
          <Jatekter lista={lista} />
        </article>
      </header>
      <footer>Botka Bianka</footer>
    </div>
  );
}

export default App;
