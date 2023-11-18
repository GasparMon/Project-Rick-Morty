
import { useState } from 'react';
import '../NavBar/NavBar.css'
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar(props){

    const navigate = useNavigate();

    const onSearch = props.onSearch;

    const[id, setId] = useState({valor: ""})

    function HandleValue(event){
        setId({...id, valor : event.target.value})
    }

    const handleLogOut = () => {

        navigate('/')
    }

   return(
    <div id = "div-navbar">
        <nav id= "nav-navbar">
            <Link to="/home"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <button onClick={handleLogOut}>Log Out</button>
            <div id="div-Searchnavbar">
          <input id = "search-bar" type="search" placeholder="Buscar ID..." onChange={HandleValue} value={id.valor}/>
          <button id="search-button" onClick={()=> onSearch(id.valor)} >Agregar</button>
            </div>
        </nav>
    </div>
   ) 
}