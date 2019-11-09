import React from "react";
import Card from "./Card";

const Cards = ({ cards, flip, flipClass, foundMatch }) => {
  return (
    <div className="container">
      <h1>Here are component with all cards</h1>
      <div className="cards-container" style={{ backgroundColor: "lightblue" }}>
        {cards.map((a, i) => (
          <Card
            key={i}
            value={a}
            index={i}
            flipClass={flipClass}
            onClick={flip}
            foundMatch={foundMatch}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
