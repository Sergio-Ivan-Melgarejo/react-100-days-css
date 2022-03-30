import React from 'react'
import "./day24.css"

const Day24 = () => {
  return (
    <div className='days day24'>
        <input type="checkbox" id="button" className="day24__checkbox"/>
        <label htmlFor="button" className="day24__button">
            Finish
            <img className='day24__icon' src="https://100dayscss.com/codepen/checkmark-green.svg" alt='icon'/>
        </label>
        <svg className="day24__circle">
            <circle cx="2.5em" cy="2.5em" r="2.3em"/>
        </svg>
    </div>
  )
}

export default Day24