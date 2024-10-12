
import './App.css';
import Jatekter from './components/Jatekter';

function App() {

  const lista = ["", "", "O", "", "X", "", "", "", "O"]

  function katt(adat){
    console.log("app-ban", adat)
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic-Tac-Toe</h1>
      </header>
      <article>
        <div className="jatekter">
        <Jatekter lista={lista} katt={katt}/>
        </div>
      </article>

      <footer>Botka Bianka</footer>
    </div>
  );
}

export default App;
