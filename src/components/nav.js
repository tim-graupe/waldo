import React from "react";

export default function Nav(props) {
  const { chars } = props;
  return (
    <div className="nav">
      {chars.map((char) => {
        return (
          <img key={char.id} src={char.img} id={char.id} alt={char.alt} className="icons" />
        );
      })}
    </div>
  );
}
