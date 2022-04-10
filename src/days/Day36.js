import React from 'react'
import "./day36.css"

const Day36 = () => {
  return (
    <div className='days day36'>
        <main className='day36__main'>
            
            <input defaultChecked="checked" name='page' className='day36__input' id='dashboard' type="radio" ></input> 
            <input name='page' className='day36__input' id='comments' type="radio" ></input>
            <input name='page' className='day36__input' id='notifications' type="radio" ></input>
            <input name='page' className='day36__input' id='settings' type="radio" ></input>
            <input name='page' className='day36__input' id='search' type="radio" ></input>

            <nav className='day36__nav'>
                <ul className='day36__ul'>
                    <li className='day36__pointer'></li>
                    <li className='day36__li'>
                        <label className='day36__label' htmlFor="dashboard">
                            <i className='day36__icon fas fa-user'></i>
                        </label>
                    </li>
                    <li className='day36__li'>
                        <label className='day36__label' htmlFor="comments">
                            <i className='day36__icon fas fa-comment'></i>
                        </label>
                    </li>
                    <li className='day36__li'>
                        <label className='day36__label' htmlFor="notifications">
                            <i className='day36__icon fas fa-bell'></i>
                        </label>
                    </li>
                    <li className='day36__li'>
                        <label className='day36__label' htmlFor="settings">
                            <i className='day36__icon fas fa-cog'></i>
                        </label>
                    </li>
                    <li className='day36__li'>
                        <label className='day36__label' htmlFor="search">
                            <i className='day36__icon fas fa-search'></i>
                        </label>
                    </li>
                </ul>
            </nav>

            <section className='day36__section day36__dashboard'>
                <h2 className='day36__h2'>Dashboard</h2>
                <div className='day36__content'>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                </div>
            </section>
            <section className='day36__section day36__comments'>
                <h2 className='day36__h2'>Comments</h2>
                <div className='day36__content'>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                </div>
            </section>
            <section className='day36__section day36__notifications'>
                <h2 className='day36__h2'>Notifications</h2>
                <div className='day36__content'>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                </div>
            </section>
            <section className='day36__section day36__settings'>
                <h2 className='day36__h2'>Settings</h2>
                <div className='day36__content'>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                    <span className='day36__span'></span>
                </div>
            </section>
            
            <section className='day36__section day36__search'>
                <h2 className='day36__h2'>Search</h2>
                <div className='day36__content'>
                    <input className='day36__search-input' type="search" placeholder='Search ...' />
                </div>
            </section>
        </main>
    </div>
  )
}

export default Day36