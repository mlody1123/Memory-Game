import React from 'react'
import question from './question-solid.svg'

const Card = ({ value, flipClass, onClick, index, foundMatch }) => {
  let x = 'flip-card-inner'
  const showHideCover = foundMatch.includes(value)
    ? 'covered display-block'
    : 'display-none'
  if (flipClass.includes(index)) {
    x = 'flip-card-inner flip'
  } else if (foundMatch.includes(value)) {
    x = 'flip-card-inner flip'
  }
  return (
    <div onClick={() => onClick(value, index)} className='card-container'>
      <div className={x}>
        <div className='flip-card-front'>
          <div className='icon'>
            <img src={question} alt='question mark' />
          </div>
        </div>
        <div className='flip-card-back'>
          <div className='card-content'>
            <span className={showHideCover}></span>
            <img src={`/images/${value}.png`} alt='emotikon'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
