import React from 'react'
import "./day27.css"

const Day27 = () => {
  return (
    <div className='days day27'>
        <div className='day27__container'>
            <h1 className='day27__h1'>Saturday</h1>
            <p className='day27__p'>April 2, 2022</p>
            <hr className='day27__hr'></hr>
            <ul className='day27__ul'>
                <li className='day27__li'>
                    <input className='day27__input' id='input-1' type="checkbox" />
                    
                    <label className='day27__label' htmlFor='input-1'>
                        <span className='day27__span'>Create a list</span>
                        <span className='day27__span'></span>
                    </label>
                </li>
                <li className='day27__li'>
                    <input className='day27__input' id='input-2' type="checkbox" />
                    <label className='day27__label' htmlFor='input-2'>
                        <span className='day27__span'>Complete first task</span>
                        <span className='day27__span'></span>
                    </label>
                </li>
                <li className='day27__li completed'>
                    <input className='day27__input' id='input-3' type="checkbox" />
                    <label className='day27__label' htmlFor='input-3'>
                        <span className='day27__span'>Write some CSS code</span>
                        <span className='day27__span'></span>
                    </label>
                </li>
                <li className='day27__li'>
                    <input className='day27__input' id='input-4' type="checkbox" />
                    <label className='day27__label' htmlFor='input-4'>
                        <span className='day27__span'>Take over the world</span>
                        <span className='day27__span'></span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Day27