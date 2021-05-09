// STAR MATCH - Starting Template
import React, { useState } from "react";
import Game from "./components/Game";
import './StarMatch.css'



// const StarMatch = () => {

//   const startGame = () => {
//     setGameId(gameId + 1)
//   }
//   const [gameId, setGameId] = useState(1)
//   return <Game key={gameId} startNewGame={() => startGame} />
// }

class StarMatch extends React.Component {
  constructor(props: any) {
    super(props);

  }
  // const [gameId, setGameId] = useState(1)

  startGame = () => {
    console.log('starting')
  }

  render() {
    return (<Game key={1} startNewGame={() => this.startGame} />
    )
  }



}

export default StarMatch;
