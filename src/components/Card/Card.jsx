/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.item.name}</h2>
      {props.item.evolutionFor && <p>Evolui para: <b>{props.item.evolutionFor}</b></p> }
      <img src={props.item.image} alt={props.item.alt} width="200" />
    </div>
  );
}
