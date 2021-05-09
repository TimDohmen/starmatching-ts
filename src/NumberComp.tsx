import './StarMatch.css'
import React from 'react'


type Props = {
  numberProp: number
}

const NumberComp = ({ numberProp }: Props) => {
  return (
    <div className="star" onClick={() => console.log(numberProp)}>
      {numberProp}
    </div>
  )
}


// const NumberComp = (numberProp: number) => {
//   return (
//     <div className="star" onClick={() => console.log(numberProp)}>
//       {numberProp}
//     </div>
//   )
// }

export default NumberComp