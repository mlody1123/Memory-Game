import React from 'react'

const LandingPage = ({ handleStartGame }) => {
  return (
    <div className='landing-container'>
      <div className='landing'>
        <h1>Welcome in Memory Game</h1>
        <p>If u want to start a game just click the button below</p>
        <button onClick={() => handleStartGame()}>Start Game</button>
      </div>
    </div>
  )
}

export default LandingPage
