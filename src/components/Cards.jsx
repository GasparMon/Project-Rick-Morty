import Card from "./Card";

export default function Cards(props) {
  const personajes = props.characters;

  return (
    <div>
      {personajes.map((e, i) => (
        <Card
          key={i}
          id={e.id}
          name={e.name}
          status={e.status}
          species={e.species}
          gender={e.gender}
          origin={e.origin.name}
          image={e.image}
          onClose={() => window.alert("Emulamos que se cierra la card")}
        />
      ))}
    </div>
  );
}
