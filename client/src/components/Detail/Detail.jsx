import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Detail.css";
const url = import.meta.env.VITE_URL_HOST

export default function Detail(props) {

  const navigate = useNavigate();

  const goBack = () => {
 
    navigate(-1);
  };

  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    //axios(`https://rickandmortyapi.com/api/character/${id}`)
    axios(`${url}/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, []);

  //console.log(character)

  return (
    <div>
      <h1>
        Character Info{" "}
        <span id="info" class="material-symbols-outlined">
          info
        </span>
      </h1>

      <div id="div-detail">
      
          <span id="detail-span" class="material-symbols-outlined" onClick={goBack} >
            keyboard_return
          </span>
       
        <div id="inner-detail">
          <img id="detail-img" src={character.image} alt={character.name}  />
          <h2>{character.name}</h2>
        </div>
        <div id="inner-detail-text">
          <h2>ID - {character.id}</h2>
          <h2>
            Status - {character.status}
            {character.status === "Alive" && (
              <span id="live" class="material-symbols-outlined">
                settings_accessibility
              </span>
            )}
            {character.status === "Dead" && (
              <span id="dead" class="material-symbols-outlined">
                skull
              </span>
            )}
            {character.status === "unknown" && (
              <span id="unknown" class="material-symbols-outlined">
                help
              </span>
            )}
          </h2>
          <h2>
            Gender - {character.gender}
            {character.gender === "Male" && (
              <span id="Male" class="material-symbols-outlined">
                male
              </span>
            )}
            {character.gender === "Female" && (
              <span id="Female" class="material-symbols-outlined">
                female
              </span>
            )}
            {character.gender === "unknown" && (
              <span id="unknown" class="material-symbols-outlined">
                help
              </span>
            )}
          </h2>
          <h2>Species - {character.species}</h2>
          <h2>Origin - {character.origin?.name}</h2>
          <h2>Location - {character.location?.name}</h2>
        </div>
      </div>
    </div>
  );
}
