import React, { useState } from 'react'
import "./day2.css"

const Day2 = () => {
    const [active, setActive] = useState(false);
    const [noAnimation, setNoAnimation] = useState(true);
    return (
        <div className={active ? "day2 active" : "day2"} >
            <button className={noAnimation ? 'button-day2 no-animation' : "button-day2"} onClick={()=>{setActive(!active);setNoAnimation(false)}}>
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
            </button>
        </div>
    )
}
export default Day2;