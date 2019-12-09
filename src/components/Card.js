import React from 'react'
import question from './question-solid.svg'

const Card = ({ value, flipClass, onClick, index, foundMatch }) => {
  let x = 'flip-card-inner'
  if (flipClass.includes(index) || foundMatch.includes(value))
    x = 'flip-card-inner flip'
  return (
    <div onClick={() => onClick(value, index)} className='card-container'>
      <div className={x}>
        <div className='flip-card-front'>
          <div className='icon'>
            <img src={question} alt='question mark' />
          </div>
        </div>
        <div className='flip-card-back'>
          <div className='card-content'>{value}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
