import React, { useState, useEffect } from "react";
import utils from "../math-utils";

class GameState extends React.Component {

  //   constructor(props: any) {
  //     super(props);
  //     this.state = {
  //       stars: utils.random(1, 9),
  //       availableNums: utils.range(1, 9),
  //       candidateNums: [] as any,
  //       secondsLeft: 10
  //     }
  //   }

  //   // const[stars, setStars] = useState(utils.random(1, 9));
  //   // const [availableNums, setAvailableNums] = useState(utils.range(1, 9))
  //   // const [candidateNums, setCandidateNums] = useState([]) as any

  //   // const[secondsLeft, setSecondsLeft] = useState(10)

  //   componentDidMount() {
  //     if (this.state.secondsLeft > 0 && state.availableNums.length > 0) {
  //       const timerId = setTimeout(() => {
  //         setSecondsLeft(state.secondsLeft - 1)
  //       }, 1000)
  //       // cleans up effect
  //       return () => clearTimeout(timerId)
  //     }
  //   }
  //   componentDidUpdate() {
  //     if (state.secondsLeft > 0 && state.availableNums.length > 0) {
  //       const timerId = setTimeout(() => {
  //         this.state.secondsLeft = (state.secondsLeft - 1)
  //       }, 1000)
  //       // cleans up effect
  //       return () => clearTimeout(timerId)
  //     }
  //   }

  //   // useEffect(() => {
  //   //   if (secondsLeft > 0 && availableNums.length > 0) {
  //   //     const timerId = setTimeout(() => {
  //   //       setSecondsLeft(secondsLeft - 1)
  //   //     }, 1000)
  //   //     // cleans up effect
  //   //     return () => clearTimeout(timerId)
  //   //   }
  //   // })

  //   const setGameState = (newCandidateNums: number[]) => {
  //     if (utils.sum(newCandidateNums) !== stars) {
  //       setCandidateNums(newCandidateNums)
  //     } else {
  //       const newAvailableNums = availableNums.filter(n => !newCandidateNums.includes(n))
  //       setStars(utils.randomSumIn(newAvailableNums, 9))
  //       setAvailableNums(newAvailableNums)
  //       setCandidateNums([])
  //     }
  //   }

  // return { stars, availableNums, candidateNums, secondsLeft, setGameState }



}

export default GameState