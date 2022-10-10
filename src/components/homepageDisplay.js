import React, {useCallback} from "react";
import { useNavigate } from "react-router-dom";

export default function HomepageCard(props) {
  const { chars } = props;
  const navigate = useNavigate()
  const goToComponent = useCallback(() => navigate(`${props.title}`, {replace: true}), [navigate]);
   
  return (
    <div className="card" onClick={goToComponent}>
      <p>{props.title}</p>
      <img src={props.bg} alt={props.bg} className="card-img" />
      {chars.map((char) => {
        return (
          <img
            key={char.id}
            src={char.img}
            id={char.id}
            alt={char.alt}
            className="hp-icons"
          />
        );
      })}
    </div>
  );
}
