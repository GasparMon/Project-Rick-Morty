import Card from "./Card";

export default function Cards(props) {
  const personajes = props.characters;

  return (
    <div>
      {personajes.map((e, i) => (
        <Card key={i} {...e} />
      ))}
    </div>
  );
}
