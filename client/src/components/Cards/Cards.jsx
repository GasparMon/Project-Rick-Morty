import Card from "../Card/Card.jsx";
import "./Cards.css";

export default function Cards(props) {
  let personajes = props.characters;
  let onClose = props.onClose;

  const renderizarDivInicio = () => {
    if (personajes.length === 0) {
      return (
        <div id="main-landing">
          <img src="/img/rick-space.png" alt="rick-space" id="rick-space"></img>
          <h1>¡Hola, incauto aventurero interdimensional!</h1>
          <h1>
            Bienvenido a este caótico y genial proyecto basado en Rick and
            Morty. ¿Te preparas para sumergirte en las profundidades de la
            ciencia loca, las bromas cósmicas y los personajes más
            estrafalarios?
          </h1>
          <h1>
            Aquí, tienes el control total. Agrega a esos personajes tan
            peculiares, échales un vistazo a sus características y sumérgete en
            el extravagante diseño que los hace únicos. En este rincón del
            multiverso, la diversión está garantizada y la cordura... bien, eso
            es opcional.
          </h1>
        </div>
      );
    }
    return null;
  };

  return (
    <div id="main-div">
      <div id="cards-div">
        {renderizarDivInicio()}
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
