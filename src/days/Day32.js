import React, { useState } from 'react'
import "./day32.css"

const Day32 = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  const [effect, setEffect] = useState("")

  const handleLess = () =>{
    setEffect("")
    setCountOne(countOne - 1);
    setCountTwo(countOne)
    setTimeout(()=>setEffect("less"),100)
  }

  const handlePlus = () =>{
    setEffect("")
    setCountOne(countOne + 1);
    setCountTwo(countOne)
    setTimeout(()=>setEffect("plus"),100)
  }

  return (
    <div className='days day32'> 
      <div className='day32__container'>
        <button onClick={handleLess} className='day32__less'>
          <span className='day32__line'></span>
        </button>
        <div className='day32__number-container'>
          <span className='day32__number'>{countOne}</span>
          <span className={`day32__number-effect ${effect}`}>{countTwo}</span>
        </div>
        <button onClick={handlePlus} className='day32__plus'>
          <span className='day32__line'></span>
          <span className='day32__line'></span>
        </button>
      </div>
    </div>
  )
}

export default Day32