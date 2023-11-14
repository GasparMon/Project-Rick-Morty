export default function Card(props) {

  const onclose = props.onClose;
  const id = props.id

  return (
    <div>
      <button onClick={()=>onclose(id)}>X</button>
      <h2>{props.name}</h2>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  )
}

