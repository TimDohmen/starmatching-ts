import React from "react"

type Props = {
  gameStatus: string,
  onClick: Function
}


const PlayAgain = ({ gameStatus, onClick }: Props) => {
  return (<div className="game-done">
    <div className="message" style={{ color: gameStatus === 'lost' ? 'red' : 'green' }}>
      {gameStatus === 'lost' ? 'Game Over' : 'Very Nice'}
    </div>
    <button onClick={onClick()}>Play Again</button>
  </div>)
}

export default PlayAgain
