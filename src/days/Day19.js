import React, { useState } from 'react'
import "./day19.css"

const Day19 = () => {
    const [active, setActive] = useState("")
    const handleClick = (active) => setActive(active)
  return (
    <form className={`days day19 ${active}`}>
        <div className='day19__background'></div>
        <fieldset className='day19__fieldset' id=''>
            <input className='day19__radio' type="radio" id="check-1" name="select" tabIndex={1} />
            <label onClick={()=>handleClick("day19__color1")} className="day19__label" htmlFor="check-1" id="c1"></label>
            <input className='day19__radio' type="radio" id="check-2" name="select" tabIndex={2} />
            <label onClick={()=>handleClick("day19__color2")} className="day19__label" htmlFor="check-2" id="c2"></label>
            <input className='day19__radio' type="radio" id="check-3" name="select" tabIndex={3} />
            <label onClick={()=>handleClick("day19__color3")} className="day19__label" htmlFor="check-3" id="c3"></label>
            <div className='day19__circle'></div>
        </fieldset>
    </form>
  )
}

export default Day19