import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../EpDetail/EpDetail.modules.css";
import Ep_characters from "../Ep_characters/Ep_characters";

export default function EpDetail(props) {
  const { id } = useParams();
  //console.log(id);

  const [episode, setEpisode] = useState({});

  useEffect(() => {
    //axios(`https://rickandmortyapi.com/api/character/${id}`)
    axios
      .get(`http://localhost:3001/rickandmorty/episodes/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setEpisode(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }, []);

  const chars = () => {

    if(!episode.characters){
      return(
        <div>

        </div>
      )
    }else {
      return episode.characters.map((element, index) => (
        <Ep_characters
        key={index}
        element = {element}
        />
      ))
    }
  }

  return (
    <div>
      <div id="div-title-episode">
        <h1>Episode Detail</h1>
        <span id="info" class="material-symbols-outlined">
          live_tv
        </span>
      </div>
      <div id="div-detail">
        <Link id="link" to="/allepisodes">
          {" "}
          <span id="detail-span" class="material-symbols-outlined">
            keyboard_return
          </span>
        </Link>
        <div id="div-inner-detail">
          <div id="div_num_ep">
            <h1>
              <span class="label">Episode Number </span> {episode.id}
            </h1>
          </div>
          <div id="div_ep_inf">
            <h2>
              <span class="label">Episode Name:</span> {episode.name}
            </h2>
            <h2>
              <span class="label">Air Date:</span> {episode.air_date}
            </h2>
            <h2>{episode.episode}</h2>
          </div>
        </div>
        <div id="inner-detail-ep">
          <div id="div_char_tit">
            <h1>
              <span class="label">Episode Cast </span>
            </h1>
          </div>
          <div id="div_char_ep">
  
            {chars()}
        
          </div>
        </div>
      </div>
    </div>
  );
}
