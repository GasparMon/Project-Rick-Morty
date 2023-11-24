import Card from '../Card/Card.jsx'
import "./Cards.css";

export default function Cards(props) {

  let personajes = props.characters
  let onClose = props.onClose

  return (
    <div id="main-div">
    <div id="cards-div">
      {personajes.map((elemento, index) => (
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
    </div>
  );
}

