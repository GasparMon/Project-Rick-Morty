import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
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
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onclose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{props.name}</h2>
      </Link>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
