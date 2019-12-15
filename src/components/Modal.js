import React from 'react'
import Statistics from './Statistics'

const Modal = ({ title, content, show, handleCloseModal, time, moves }) => {
  const showHideClass = show
    ? 'modal-container display-block'
    : 'modal-container display-none'

  return (
    <div
      onClick={event =>
        event.target.id === 'modal-container' && handleCloseModal()
      }
      id='modal-container'
      className={showHideClass}
    >
      <div className='modal'>
        <div className='modal-title'>
          <h1>{title}</h1>
        </div>
        <div className='modal-content'>{content}</div>
        <Statistics time={time} moves={moves} />
        <button onClick={() => handleCloseModal()}>Start Again</button>
      </div>
    </div>
  )
}

export default Modal
