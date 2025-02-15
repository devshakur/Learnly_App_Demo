import React from 'react'
import Stepper from './Stepper'
import Counter from './Counter'
const TimeProgressBar = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between'}}>
      <Stepper />
      <Counter />
    </div>
  )
}

export default TimeProgressBar
