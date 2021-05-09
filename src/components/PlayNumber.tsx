import { render } from "@testing-library/react"
import React from "react"


type Props = {
  num: number,
  status: string,
  onClick: Function,
}

interface Colors {
  available: string,
  used: string,
  wrong: string,
  candidate: string
}

const PlayNumber = ({ num, status, onClick }: Props) => {

  const colors: Colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };
  return (
    <button className="number"
      onClick={() => onClick(num, status)}
      style={{ backgroundColor: (colors as any)[status] }}
    >
      { num}</button >
  )
}







// type Colors = Object =({
//   available: 'lightgray',
//   used: 'lightgreen',
//   wrong: 'lightcoral',
//   candidate: 'deepskyblue',
// })

export default PlayNumber