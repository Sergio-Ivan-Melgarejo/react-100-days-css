import React from 'react'
import "./day45.scss"

const Day45 = () => {
  return (
    <div className='days day45'>
        <button className='day45__button'>
            Hover me
            <svg className='day45__svg' viewBox="0 0 180 60">
                <polyline className='day45__line' points="179,1 179,59 1,59 1,1 180,1" />
            </svg>
        </button>
    </div>
  )
}

export default Day45