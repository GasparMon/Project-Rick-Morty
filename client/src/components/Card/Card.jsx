import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";
import "./Card.css";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const onclose = props.onClose;
  const id = props.id;

  const [isFav, setisFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setisFav(false);

      dispatch(removeFav(props.id));
    } else {
      setisFav(true);

      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setisFav(true);
      }
    });
  }, [myFavorites]);

  return (

    <div id="card-div">
      <div id="card-inner-div">
      <img src={props.image} alt={props.name} />
      <Link to={`/detail/${id}`} id="card-link">
        <h2 id="card-h2">{props.name}</h2>
      </Link>
      
      <div id="card-button">
        {isFav ? (
          <span class="material-symbols-outlined" onClick={handleFavorite} style={{ color: "red" }}>
            heart_check
          </span>
        ) : (
          <span class="material-symbols-outlined" onClick={handleFavorite} >
            heart_plus
          </span>
        )}
        <span class="material-symbols-outlined" onClick={() => onclose(id)}>delete</span>
      </div>
      </div>
      <div id="detail-div">
      <h3>
        {props.status} - {props.gender}{" "}
      </h3>

      <h2>Specie:</h2>
      <h3>{props.species}</h3>
      <h2>Origin:</h2>
      <h3>{props.origin}</h3>
      <h5>ID:{props.id}</h5>
      </div>
    </div>

  );
}

//<h2>{props.gender}</h2>
