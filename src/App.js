import React, { useState, useEffect } from 'react'
import Cards from './components/Cards'
import Statistics from './components/Statistics'
import './index.css'

const App = () => {
  const [cards, setCards] = useState([])
  const [flipClass, setFlipClass] = useState([])
  const [selectedNumber, setSelectedNumber] = useState({})
  const [foundMatch, setFoundMatch] = useState([])
  const [moves, setMoves] = useState(0)

  const randomNumber = range => {
    return Math.floor(Math.random() * (range / 2) + 1)
  }

  useEffect(() => {
    if (foundMatch.length === 10) {
      window.confirm('Wygrales')
      setFoundMatch([])
      shuffleCards(20)
    }
  }, [foundMatch])

  const flip = (value, index) => {
    if (flipClass.length < 2 && !flipClass.includes(index)) {
      setFlipClass(flipClass.concat(index))
      if (!selectedNumber.hasOwnProperty('index')) {
        setSelectedNumber({ index, value })
      } else if (
        selectedNumber.index !== index &&
        selectedNumber.value === value
      ) {
        setFoundMatch(foundMatch.concat(value))
        setFlipClass([])
        setSelectedNumber({})
      } else if (selectedNumber.value !== value) {
        setTimeout(() => {
          setFlipClass([])
          setSelectedNumber({})
        }, 1500)
      }
      setMoves(moves + 1)
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
