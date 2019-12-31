import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import Statistics from './Statistics'
import Modal from './Modal'

const Game = () => {
  const [cards, setCards] = useState([])
  const [flipClass, setFlipClass] = useState([])
  const [selectedNumber, setSelectedNumber] = useState({})
  const [foundMatch, setFoundMatch] = useState([])
  const [moves, setMoves] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [time, setTime] = useState(0)

  const cardNumber = 20

  useEffect(() => {
    if (cards.length === 0) shuffleCards(cardNumber)
  })

  useEffect(() => {
    if (showModal) return
    const startTime = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
    return () => {
      clearInterval(startTime)
    }
  }, [showModal])

  useEffect(() => {
    if (foundMatch.length === cardNumber / 2) {
      setShowModal(true)
    }
  }, [foundMatch, cardNumber])

  const drawNumber = range => {
    return Math.floor(Math.random() * (range / 2) + 1)
  }

  const handleCloseModal = () => {
    setFlipClass([])
    setFoundMatch([])
    setMoves(0)
    setTime(0)
    setTimeout(() => {
      shuffleCards(cardNumber)
    }, 600)

    setShowModal(false)
  }

  const flip = (value, index) => {
    if (
      flipClass.length < 2 &&
      !flipClass.includes(index) &&
      !foundMatch.includes(value)
    ) {
      setMoves(moves + 0.5)
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
        }, 1000)
      }
    }
  }

  const randomNumber = (tmpCards, range) => {
    const number = drawNumber(range)
    const find = tmpCards.filter(card => card === number)

    if (find.length < 2) {
      return number
    } else {
      return randomNumber(tmpCards, range)
    }
  }

  const shuffleCards = range => {
    let tmpCards = []
    for (let i = 0; i < range; i++) {
      const number = randomNumber(tmpCards, range)
      tmpCards.push(number)
    }

    setCards(tmpCards)
  }

  return (
    <div className='App'>
      <Statistics moves={moves} time={time} />
      <Modal
        title='You Win'
        content='Congratulation you did this , here are your statistics: '
        show={showModal}
        handleCloseModal={handleCloseModal}
        moves={moves}
        time={time}
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

export default Game
