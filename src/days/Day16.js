import React from 'react'
import "./day16.css"

const Day16 = () => {
  return (
    <div className='days day16'>
        <div className='day16__center'>
            <div className='day16__circle'></div>
            <div className='day16__circle-line'></div>

            <div className='day16__triangle'>
              <div className='day16__line'></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232"/>
              </svg>
            </div>

            <div className='day16__heart'>
              <div className='day16__line'></div>
              <div className='day16__line'></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/>
              </svg>
            </div>
        </div>
    </div>
  )
}

export default Day16