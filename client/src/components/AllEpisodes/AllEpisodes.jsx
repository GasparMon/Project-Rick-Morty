import { useEffect } from "react";
import "../AllEpisodes/Allepisodes.modules.css";
import { useDispatch, useSelector } from "react-redux";
import { allEpisodes } from "../../redux/actions";
import Episode from "../Episode/Episode";

export default function AllEpisodes(props) {

    const dispatch = useDispatch()
    const allepisodes = useSelector(state => state.allEpisodes)

    useEffect(() => {

        dispatch(allEpisodes())
        
    },[])

  return (
    <div>
      <div id="div-title-episode">
        <h1>Episodes</h1>
        <span id="info" class="material-symbols-outlined">
          connected_tv
        </span>
      </div>
      <div id="div-all">
        {allepisodes.map((element, index) => (
            <Episode
            key={index}
            id ={element.id}
            name={element.name}
            />
        ))}
      </div>
    </div>
  );
}
