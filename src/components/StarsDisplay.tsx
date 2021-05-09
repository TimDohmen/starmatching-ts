import React from "react"
import utils from "../math-utils"
import NumberComp from "../NumberComp"

type Props = {
  count: number
}

const StarsDisplay = ({ count }: Props) => {
  return (
    <>
      {utils.range(1, count).map(starId =>
        <NumberComp numberProp={starId} key={starId} />
      )}
    </>
  )
}

export default StarsDisplay