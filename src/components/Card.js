import React from "react";

const Card = ({ value, flipClass, onClick, index, foundMatch }) => {
  let x = "flip-card-inner";
  if (flipClass.includes(index) || foundMatch.includes(value))
    x = "flip-card-inner flip";
  return (
    <div onClick={() => onClick(value, index)} className="card-container">
      <div className={x}>
        <div className="flip-card-front">front</div>
        <div className="flip-card-back">{value}</div>
      </div>
    </div>
  );
};

export default Card;
