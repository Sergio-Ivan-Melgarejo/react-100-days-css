import React, { useState } from 'react'
import "./day2.css"

const Day2 = () => {
    const [active, setActive] = useState(false);
    const [noAnimation, setNoAnimation] = useState(true);
    return (
        <div className={active ? "days day2 active" : "days day2"} >
            <button className={noAnimation ? 'day2__button no-animation' : "day2__button"} onClick={()=>{setActive(!active);setNoAnimation(false)}}>
                <div className='day2__line-1'></div>
                <div className='day2__line-2'></div>
                <div className='day2__line-3'></div>
            </button>
        </div>
    )
}
export default Day2;