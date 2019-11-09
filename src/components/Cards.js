import React from "react";
import Card from "./Card";

const Cards = () => {
  const x = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="container">
      <h1>Here are component with all cards</h1>
      <div className="cards-container" style={{ backgroundColor: "lightblue" }}>
        {x.map(a => (
          <Card key={a} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
