import React from "react";
import "./Cards.css";

function Cards({ title, image, description }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="cardImageContainer">
        <img src={image} alt="" className="cardImage" />
      </div>
      <div className="cardDescription">{description}</div>
    </div>
  );
}

export default Cards;
