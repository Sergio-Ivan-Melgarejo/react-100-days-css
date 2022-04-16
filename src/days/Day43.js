import React, { useState } from 'react'
import "./day43.css"

const Day43 = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    
    return (
        <div className={click ? 'days day43 click' : 'days day43'}>
            <div className='day43__container'>
                <svg className='day43__light-bulb' viewBox="0 0 76 94">
                    <path d="M76,37.037 C76,59.939 55.6428571,75.427 55.6428571,93.5 L20.3571429,93.5 C20.3571429,75.427 0,59.9335 0,37.037 C0,13.1505 18.9891429,0 37.9782857,0 C56.9891429,0 76,13.167 76,37.037 L76,37.037 Z"></path>
                    <div className='day43__wire'></div>
                </svg>
                <div className="day43__glow"></div>
                <svg className="day43__base" viewBox="0 0 32 33">
                    <path d="M29.3333333,0 L2.66666667,0 C1.19466667,0 0,1.232 0,2.75 C0,4.268 1.19466667,5.5 2.66666667,5.5 L29.3333333,5.5 C30.8053333,5.5 32,4.268 32,2.75 C32,1.232 30.8053333,0 29.3333333,0 L29.3333333,0 Z M29.3333333,11 L2.66666667,11 C1.19466667,11 0,12.232 0,13.75 C0,15.268 1.19466667,16.5 2.66666667,16.5 L29.3333333,16.5 C30.8053333,16.5 32,15.268 32,13.75 C32,12.232 30.8053333,11 29.3333333,11 L29.3333333,11 Z M30.6666667,22 L1.33333333,22 L9.072,31.1245 C10.0853333,32.3125 11.552,33 13.088,33 L18.9173333,33 C20.4533333,33 21.9146667,32.3125 22.928,31.1245 L30.6666667,22 L30.6666667,22 Z"></path>
                </svg>
                <div className='day43__shadow'></div>
            </div>
            <button onClick={handleClick} className='day43__btn'><span className='day43__span'></span></button>
        </div>
    )
}

export default Day43