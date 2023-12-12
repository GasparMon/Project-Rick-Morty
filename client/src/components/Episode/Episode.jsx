import { Link } from "react-router-dom"
import "../Episode/Episode.modules.css"
export default function Episode(props){

    return(
        <Link to={`/episode_detail/${props.id}`} id="ep_link"  >
        <button id="div-episode">
            <h2>{props.id}</h2>
            <h3>{props.name}</h3>
        </button>
        </Link>
    )
}