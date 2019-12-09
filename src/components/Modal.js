import React from 'react'

const Modal = ({ title, content, show, handleCloseModal }) => {
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
      </div>
    </div>
  )
}

export default Modal
