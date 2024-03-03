import React from "react";

function Card({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`} key={pizza.name}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h2>{pizza.name}</h2>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "Sold Out" : pizza.price + 3}</span>
      </div>
    </li>
  );
}

export default Card;
