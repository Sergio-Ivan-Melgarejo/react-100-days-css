import React, { useState } from 'react'
import "./day39.css"

const Day39 = () => {
    const [click, setClick] = useState(false)
    const handleClick = (e) =>{
        e.stopPropagation()
        setClick(!click)
    }
    return (
        <div className='days day39'>
            <ul onClick={handleClick} className={click ? 'day39__ul open' : 'day39__ul'}>
                <li className='day39__li'>home</li>
                <li className='day39__li'>work</li>
                <li className='day39__li'>life</li>
                <li className='day39__li'>spitiy</li>
            </ul>
        </div>
  )
}

export default Day39