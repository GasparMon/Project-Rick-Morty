import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useEffect } from "react";

export default function Favorites(props){

    const onClose = props.onClose
    const dispatch = useDispatch();
    var myFavorites = useSelector(state => state.myFavorites)

    const handleOrder = (event) => {

        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {

        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>

          {myFavorites.map((elemento, index) => (
            <Card
            
              key={index}
              id={elemento.id}
              name={elemento.name}
              status={elemento.status}
              species={elemento.species}
              gender={elemento.gender}
              origin={elemento.origin.name}
              image={elemento.image}
              onClose={onClose}
           
            />
          ))}
        </div>
      );
}