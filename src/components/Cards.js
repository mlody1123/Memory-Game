import React from 'react'
import Card from './Card'

const Cards = ({ cards, flip, flipClass, foundMatch }) => {
  return (
    <div className='cards-container'>
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
  )
}

export default Cards
