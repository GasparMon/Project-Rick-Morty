export default function Card(props) {
  //console.log(props.name);
  const onclose = props.onClose;
  return (
    <div>
      <button onClick={onclose}>X</button>
      <h2>{props.name}</h2>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin.name}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

