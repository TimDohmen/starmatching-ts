// STAR MATCH - Starting Template
import React, { useState } from "react";
import Game from "./components/Game";
import './StarMatch.css'







class StarMatch extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      gameId: 1
    }
  }

  // const [gameId, setGameId] = useState(1)

  startGame = () => {
    this.setState({ gameId: this.state.gameId + 1 })
  }

  render() {
    return (<Game key={this.state.gameId} startNewGame={() => this.startGame} />
    )
  }



}

export default StarMatch;
