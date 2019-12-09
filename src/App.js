import React, { useState, useEffect } from 'react'
import Cards from './components/Cards'
import Statistics from './components/Statistics'
import Modal from './components/Modal'
import './index.css'

const App = () => {
  const [cards, setCards] = useState([])
  const [flipClass, setFlipClass] = useState([])
  const [selectedNumber, setSelectedNumber] = useState({})
  const [foundMatch, setFoundMatch] = useState([])
  const [moves, setMoves] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [cardNumber, setCardNumber] = useState(4)

  const randomNumber = range => {
    return Math.floor(Math.random() * (range / 2) + 1)
  }

  useEffect(() => {
    if (foundMatch.length === cardNumber / 2) {
      setShowModal(true)
    }
  }, [foundMatch, cardNumber])

  const handleCloseModal = () => {
    shuffleCards(cardNumber)
    setShowModal(false)
  }

  const flip = (value, index) => {
    if (
      flipClass.length < 2 &&
      !flipClass.includes(index) &&
      !foundMatch.includes(value)
    ) {
      setFlipClass(flipClass.concat(index))
      if (!selectedNumber.hasOwnProperty('index')) {
        setSelectedNumber({ index, value })
      } else if (
        selectedNumber.index !== index &&
        selectedNumber.value === value
      ) {
        setTimeout(() => {
          setFoundMatch(foundMatch.concat(value))
          setFlipClass([])
          setSelectedNumber({})
        }, 500)
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
    setFlipClass([])
    setFoundMatch([])
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
      <div className='header'>
        <h1>Match Card Game</h1>
      </div>
      <button onClick={() => shuffleCards(cardNumber)}>Shuffle Cards</button>
      <Statistics moves={moves} />
      <Modal
        title='You Win'
        content='Congratulation'
        show={showModal}
        handleCloseModal={handleCloseModal}
      />
      <Cards
        cards={cards}
        flip={flip}
        flipClass={flipClass}
        foundMatch={foundMatch}
      />
    </div>
  )
}

export default App
