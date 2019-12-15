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
    <div className='statistic'>
      <p>
        <b>Number of moves:</b> {Math.floor(moves)}
      </p>
      <p>
        <b>Time:</b> {timeToMinutes()}
      </p>
    </div>
  )
}

export default Statistics
