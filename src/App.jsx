import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import RickAndMorty from './components/RickAndMorty';
import Pokemon from './components/Pokemon';
import { useState } from 'react';

function App() {

  const [showPokemon, setShowPokemon] = useState(true)

  return (
    <div>
      <header className="bg-primary p-2 m-2 text-light text-center">
        <h1>React Clase 5</h1>
        <h2>Llamadas a api</h2>
      </header>
      <div className="d-flex align-items-center justify-content-center">
        <label htmlFor="pokemon" className="form-check-label m-2">Pokemon</label>
        <div className="form-check form-switch">
          <input type="checkbox" className="form-check-input" id="pokemon" onChange={()=>{setShowPokemon(!showPokemon)}}/>
          <label htmlFor="pokemon" className="form-check-label">Rick and Morty</label>
        </div>
      </div>
      <main className="container">
        {showPokemon ? <Pokemon/> : <RickAndMorty />}
      </main>
    </div>
  );
}

export default App;
