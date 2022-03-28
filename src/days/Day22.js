import React from 'react'
import "./day22.css"

const Day22 = () => {
  return (
    <div className='days day22'>
        <div className='day22__container'>
            <div className='day22__title'>
                YOUR DAILY
                <span className='day22__span'>PROGRESS</span>
            </div>
            <div className='day22__kcal'>
                <svg className='day22__svg day22__svg-1'>
                    <circle className="day22__bg-circle" cx="5em" cy="5em" r="4em"></circle>
                    <circle className="day22__progress" cx="5em" cy="5em" r="4em"></circle>
                </svg>
                <div className='day22__number'>1253</div>
                <div className='day22__text'>kcal</div>
            </div>
            <div className='day22__steps'>
                <svg className='day22__svg day22__svg-2'>
                    <circle className="day22__bg-circle" cx="5em" cy="5em" r="4em"></circle>
                    <circle className="day22__progress" cx="5em" cy="5em" r="4em"></circle>
                </svg>
                <div className='day22__number'>10434</div>
                <div className='day22__text'>steps</div>
            </div>
            <div className='day22__km'>
                <svg className='day22__svg day22__svg-3'>
                    <circle className="day22__bg-circle" cx="5em" cy="5em" r="4em"></circle>
                    <circle className="day22__progress" cx="5em" cy="5em" r="4em"></circle>
                </svg>
                <div className='day22__number'>9,4</div>
                <div className='day22__text'>km</div>
            </div>
        </div>
    </div>
  )
}

export default Day22

