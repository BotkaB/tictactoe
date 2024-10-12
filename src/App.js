
import './App.css';
import Jatekter from './components/Jatekter';
import { useState } from 'react';

function App() {
//react state figyeli és ha változik, rendereli újra azt a részt, ehhez useState hook-ot használ
  //const lista = ["", "", "O", "", "X", "", "", "", "O"]

  const[lista,setLista]=useState(["", "", "O", "", "X", "", "", "", "O"])
  const[lepes,setLepes]=useState(0)

  function katt(adat){
    console.log("app-ban", adat)
    //lista[adat]="X" így nem lehet a state értékét változtatni, csak a setterén (beállító fv-n keresztül.)
    //1. készíts egy másolatot a változóról
    //2. változtasd meg az értékét, 
    //3. beállító fv-n kerewsztül változtaqsd meg az eredeti változót.
    
    const sl=[...lista]  //itt másolatot hozunk létre nem ugyanarra a memóriahelyre mutat
   if(lepes%2==0){
    sl[adat]="X"
   }
   else{
     sl[adat]="O"
   }

    setLista([...sl])
    let slepes=lepes+1
    setLepes(slepes)
    //setLepes(lepes+1)
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
