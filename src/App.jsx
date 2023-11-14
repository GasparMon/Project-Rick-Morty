import './App.css';
import { useState } from 'react';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx'
import axios from 'axios';

function App() {

   const [characters, setCharacters] = useState([])

   console.log(characters)


   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   function onClose(id){

      let valor = parseInt(id)

      setCharacters((prevCharacters) => prevCharacters.filter((elemento) => elemento.id !== valor))
   }

   return (
      <div className='App'>
         <NavBar onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
