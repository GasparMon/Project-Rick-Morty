import { useSelector } from "react-redux";
import Card from "../Card/Card";

export default function Favorites(props){

    let onClose = props.onClose

    const myFavorites = useSelector(state => state.myFavorites)

    return (
        <div>
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