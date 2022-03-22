import React from 'react'
import "./day17.css"

const Day17 = () => {
  return (
    <div className='days day17'>
        <div className='day17__background'></div>
        <div className='day17__center'>
            <svg className="day17__polygon">
                <polygon className="day17__middle" points="68,0 91,0 160,117 46,117 59,93 121,93" />
                <polygon className="day17__dark" points="68,41 79,59 46,117 160,117 147,138 11,140" />
                <polygon className="day17__light" points="0,117 68,0 121,93 98,93 68,41 11,140" />
            </svg>
        </div>
    </div>
  )
}

export default Day17