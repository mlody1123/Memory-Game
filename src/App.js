import React, { useState } from "react";
import Cards from "./components/Cards";
import "./index.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipClass, setFlipClass] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState([]);
  const [foundMatch, setFoundMatch] = useState([]);
  const randomNumber = range => {
    return Math.floor(Math.random() * (range / 2) + 1);
  };

  const flip = (e, i) => {
    setFlipClass(flipClass.concat(i));
    if (selectedNumber.length === 0) {
      setSelectedNumber(selectedNumber.concat(e));
    } else if (!selectedNumber.includes(e)) {
      setTimeout(() => {
        setFlipClass([]);
        setSelectedNumber([]);
      }, 1000);
    } else if (selectedNumber.includes(e)) {
      setFoundMatch(foundMatch.concat(e));
      setFlipClass([]);
      setSelectedNumber([]);
    }
  };

  const shuffleCards = range => {
    let x = [];
    let i = 1;
    do {
      let number = randomNumber(range);
      let find = x.filter(card => card === number);
      while (find.length === 2) {
        number = randomNumber(range);
        find = x.filter(card => card === number);
      }
      setCards(x.push(number));
      i++;
    } while (i <= 16);
    setCards(x);
  };
  console.log(selectedNumber);
  return (
    <div className="App">
      <button onClick={() => shuffleCards(16)}>Shuffle Cards</button>
      <Cards
        cards={cards}
        flip={flip}
        flipClass={flipClass}
        foundMatch={foundMatch}
      />
    </div>
  );
};

export default App;
