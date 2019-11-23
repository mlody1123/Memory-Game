import React, { useState } from 'react'
import Cards from './components/Cards'
import Statistics from './components/Statistics'
import './index.css'

const App = () => {
  const [cards, setCards] = useState([])
  const [flipClass, setFlipClass] = useState([])
  const [selectedNumber, setSelectedNumber] = useState([])
  const [foundMatch, setFoundMatch] = useState([])
  const [moves, setMoves] = useState(0)
  const randomNumber = range => {
    return Math.floor(Math.random() * (range / 2) + 1)
  }

  // po nacisnieciu 2 razy w ta sama karet i tak to akceptuje - do zmiany
  const flip = (e, i) => {
    if (flipClass.length < 2) {
      setFlipClass(flipClass.concat(i))
      if (selectedNumber.length === 0) {
        setSelectedNumber(selectedNumber.concat(e))
      } else if (!selectedNumber.includes(e)) {
        setTimeout(() => {
          setFlipClass([])
          setSelectedNumber([])
        }, 1500)
      } else if (selectedNumber.includes(e)) {
        setFoundMatch(foundMatch.concat(e))
        setFlipClass([])
        setSelectedNumber([])
      }
      setMoves(moves + 0.5)
    }
  }

  const shuffleCards = range => {
    setMoves(0)
    let x = []
    for (let i = 0; i < range; i++) {
      let number = randomNumber(range)
      let find = x.filter(card => card === number)
      while (find.length === 2) {
        number = randomNumber(range)
        find = x.filter(card => card === number)
      }
      x.push(number)
    }
    console.log(x)
    setCards(x)
  }
  console.log(moves)
  return (
    <div className='App'>
      <button onClick={() => shuffleCards(20)}>Shuffle Cards</button>
      <Cards
        cards={cards}
        flip={flip}
        flipClass={flipClass}
        foundMatch={foundMatch}
      />
      <Statistics moves={moves} />
    </div>
  )
}

export default App
