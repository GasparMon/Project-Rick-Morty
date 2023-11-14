
import { useState } from 'react';
import '../NavBar/NavBar.css'

export default function NavBar(props){

    const onSearch = props.onSearch;

    const[id, setId] = useState({valor: ""})

    function HandleValue(event){
        setId({...id, valor : event.target.value})
    }

   return(
    <div id = "div-navbar">
        <nav id= "nav-navbar">
            <div id="div-Searchnavbar">
          <input id = "search-bar" type="search" placeholder="Buscar ID..." onChange={HandleValue} value={id.valor}/>
          <button id="search-button" onClick={()=> onSearch(id.valor)} >Agregar</button>
            </div>
        </nav>
    </div>
   ) 
}