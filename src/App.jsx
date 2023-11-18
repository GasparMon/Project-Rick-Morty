import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Undefined from "./components/Undefined/Undefined";
import Form from "./components/Form/Form";

function App() {
  const location = useLocation();

  const [characters, setCharacters] = useState([]);

  console.log(characters);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    let valor = parseInt(id);

    setCharacters((prevCharacters) =>
      prevCharacters.filter((elemento) => elemento.id !== valor)
    );
  }

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);

  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "mipassw@r1";

  function login(userData) {
    if (userData.password === PASSWORD && userData.mail === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
   !access && navigate('/');
}, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </div>
  );
}

export default App;
