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
            <button className="link-button">Home</button>
            </Link>
          <Link to="/about">
            <button className="link-button" >About</button>
          </Link>
          <Link to="/favorites">
            <button className="link-button">Favorites</button>
          </Link>
          <button onClick={handleLogOut} className="link-button">Log Out</button>
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
          <button  onClick={() => onSearch(id.valor)} className="link-button">
            Agregar
          </button>
          <button  onClick={() => onSearch(idRandom)} className="link-button">
            Random
          </button>
        </div>
      </nav>
    </div>
  );
}
