import React, { useState } from 'react'
import "./day7.css"

const Day7 = () => {
    const [search, setSearch] = useState(false)
    const [cardBack, setCardBack] = useState(false)
  return (
    <div className='days day7'>
            <div className={cardBack ? 'day7__container open' : 'day7__container'}>
                <div className="day7__card">
                    <header className={search ? 'day7__header active' : 'day7__header'}>
                        <button onClick={()=>setCardBack(!cardBack)} className='day7__button'>
                            <div className='day7__line-1'></div>
                            <div className='day7__circle'></div>
                            <div className='day7__line-2'></div>
                        </button>
                        <span className='day7__title'>Notifications</span>
                        <div className='day7__squares' onClick={()=>setSearch(!search)}></div>
                        <input type="search" className="day7__search" />
                    </header>
                    <div className='day7__notifications'>
                        <div className='day7__line'></div>
                        <div className='day7__notification'>
                            <span className='day7__date'>9:24 AM</span>
                            <p className='day7__note'><span className="day7__name">John Walker</span> posted a photo on your wall.</p>
                        </div>
                        <div className='day7__notification'>
                            <span className='day7__date'>8:19 AM</span>
                            <p className='day7__note'><span className="day7__name">Alice Parker</span> commented your last post.</p>
                        </div>
                        <div className='day7__notification'>
                            <span className='day7__date'>Yesterday</span>
                            <p className='day7__note'><span className="day7__name">Luke Wayne</span> added you as friend.</p>
                        </div>
                    </div>
                </div>        
            <ul className='day7__card-under'>
                <li className='day7__li'>
                    <a className='day7__a' href='#!' >
                        <div className='day7__squares'></div>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className='day7__li'>
                    <a className='day7__a' href='#!' >
                        <div className='day7__squares'></div>
                        <span>Profile</span>
                    </a>
                </li>
                <li className='day7__li'>
                    <a className='day7__a' href='#!' >
                        <div className='day7__squares'></div>
                        <span>Notifications</span>
                    </a>
                </li>
                <li className='day7__li'>
                    <a className='day7__a' href='#!' >
                        <div className='day7__squares'></div>
                        <span>Messages</span>
                    </a>
                </li>
                <li className='day7__li'>
                    <a className='day7__a' href='#!' >
                        <div className='day7__squares'></div>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Day7