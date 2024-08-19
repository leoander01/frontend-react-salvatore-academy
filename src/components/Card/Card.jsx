/* eslint-disable react/prop-types */
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <h2>{props.item.nome}</h2>
      {props.item.evoluiPara && <p>Evolui para: <b>{props.item.evoluiPara}</b></p> }
      <img src={props.item.imagem} width="200" />
    </div>
  );
}
