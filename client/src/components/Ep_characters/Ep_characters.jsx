import { useEffect, useState } from "react";
import "../Ep_characters/Ep_characters.modules.css";
import axios from "axios";
import { Link } from "react-router-dom";
const url = import.meta.env.VITE_URL_HOST

export default function Ep_characters({ element }) {
  const id = element.replace(/\D/g, "");

  const [image, setImage] = useState({});

  useEffect(() => {

    axios
    .get(`${url}/rickandmorty/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        setImage(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
  
  }, [id]);

  return(
    <div>
         <Link to={`/detail/${id}`} id="card-link">
        <img src={image.image} alt={image.name} id="char_image" />
        </Link>
    </div>
  )
 
}
