import React, { useState } from 'react'
import Game from './components/Game'
import './index.css'
import LandingPage from './components/LandingPage'

const App = () => {
  const [showGame, setShowGame] = useState(false)

  const startGame = () => {
    setShowGame(true)
  }
  return (
    <>{showGame ? <Game /> : <LandingPage handleStartGame={startGame} />}</>
  )
}

export default App
