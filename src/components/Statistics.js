import React from 'react'

const Statistics = ({ moves, time }) => {
  const timeToMinutes = () => {
    let minutes = Math.floor(time / 60)
    let seconds = time - minutes * 60

    if (seconds < 10) {
      return (
        <>
          {minutes}:0{seconds}
        </>
      )
    } else
      return (
        <>
          {minutes}:{seconds}
        </>
      )
  }
  return (
    <div>
      <p>Number of moves: {moves}</p>
      <p>Time: {timeToMinutes()}</p>
    </div>
  )
}

export default Statistics
