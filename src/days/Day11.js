import React, { useState } from 'react'
import "./day11.css"

const Day11 = () => {
    const [reverse, setReverse] = useState(false)
  return (
    <div className={reverse ? "days day11 reverse":'days day11'}>
        <button className='day10__reverse' onClick={()=>setReverse(!reverse)}>Reverse</button>
        <div className='day11__boot-left'></div>
        <div className='day11__boot-right'></div>
        <div className='day11__floor'>
            <div className='day11__line'></div>
        </div>
    </div>
  )
}

export default Day11