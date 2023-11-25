import { useState } from "react";
import "../NavBar/NavBar.css";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const navigate = useNavigate();

  const onSearch = props.onSearch;

  const [id, setId] = useState({ valor: "" });

  function HandleValue(event) {
    setId({ ...id, valor: event.target.value });
  }

  const handleLogOut = () => {
    navigate("/");
  };

  const idRandom = Math.floor(Math.random() * 826) + 1;

  return (
    <div id="div-navbar">
      <nav id="nav-navbar">
        <div id="div-link">
            <Link to="/home">
            <button class="link-button">Home</button>
            </Link>
          <Link to="/about">
            <button class="link-button" >About</button>
          </Link>
          <Link to="/favorites">
            <button class="link-button">Favorites</button>
          </Link>
          <button onClick={handleLogOut} class="link-button">Log Out</button>
        </div>
        <img id="title-form-nav" src="src/img/name_form.png" alt="rick_morty_title"/>
        <div id="div-Searchnavbar">
          <input
            id="search-bar"
            type="search"
            placeholder="Buscar ID..."
            onChange={HandleValue}
            value={id.valor}
          />
          <button  onClick={() => onSearch(id.valor)} class="link-button">
            Agregar
          </button>
          <button  onClick={() => onSearch(idRandom)} class="link-button">
            Random
          </button>
        </div>
      </nav>
    </div>
  );
}
