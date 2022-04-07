import React, { useState } from 'react'
import "./day5.css"


const Day5 = () => {
    const [data, setData] = useState({
        views:{  
            mon:"458",
            tue:"812",
            wed:"746",
            thu:"887",
            fri:"517",
            sat:"434",
            sun:"756"
        },
        purchases:{  
            mon:"26",
            tue:"41",
            wed:"22",
            thu:"36",
            fri:"25",
            sat:"13",
            sun:"20"
        }
    })

    return (
        <div className="days day5">
            <main className="day5__card">
                <header className='day5__header'>
                    <span className='day5__span'>WEEKLY REPORT</span>
                    <span className='day5__span'>Revenue</span>
                    <span className='day5__span'>01. Feb - 07. Feb</span>
                    <span className='day5__span'>{"$ 3621.79"}</span>
                </header>
                <div className='day5__statistic'>
                    <div className='day5__top'>
                        <span className='day5__span'>Views</span> 
                        <span className='day5__span'>Purchases</span>    
                    </div>
                    <div className='day5__center'>
                        <div className='day5__bar-red'></div>
                        <div className='day5__bar-blue' ></div>
                        <div className='day5__circle-red day5__mon'>
                            <span className='day5__number-red'>{data.views.mon}</span>
                        </div>
                        <div className='day5__circle-red day5__tue'>
                           <span className='day5__number-red'>{data.views.tue}</span>
                        </div>
                        <div className='day5__circle-red day5__wed'>
                            <span className='day5__number-red'>{data.views.wed}</span>
                        </div>
                        <div className='day5__circle-red day5__thu'>
                            <span className='day5__number-red'>{data.views.thu}</span>
                        </div>
                        <div className='day5__circle-red day5__fri'>
                            <span className='day5__number-red'>{data.views.dri}</span>
                        </div>
                        <div className='day5__circle-red day5__sat'>
                            <span className='day5__number-red'>{data.views.sat}</span>
                        </div>
                        <div className='day5__circle-red day5__sun'>
                            <span className='day5__number-red'>{data.views.sun}</span>
                        </div>
                        <div className='day5__circle-blue day5__mon'>
                            <span className='day5__number-blue'>{data.purchases.mon}</span>
                        </div>
                        <div className='day5__circle-blue day5__tue'>
                            <span className='day5__number-blue'>{data.purchases.tue}</span>
                        </div>
                        <div className='day5__circle-blue day5__wed'>
                            <span className='day5__number-blue'>{data.purchases.wed}</span>
                        </div>
                        <div className='day5__circle-blue day5__thu'>
                            <span className='day5__number-blue'>{data.purchases.thu}</span>
                        </div>
                        <div className='day5__circle-blue day5__fri'>
                            <span className='day5__number-blue'>{data.purchases.fri}</span>
                        </div>
                        <div className='day5__circle-blue day5__sat'>
                            <span className='day5__number-blue'>{data.purchases.sat}</span>
                        </div>
                        <div className='day5__circle-blue day5__sun'>
                            <span className='day5__number-blue'>{data.purchases.sun}</span>
                        </div>
                    </div>
                    <div className='day5__bottom'>
                        <span className='day5__span'>MON</span> 
                        <span className='day5__span'>TUE</span> 
                        <span className='day5__span'>WED</span> 
                        <span className='day5__span'>THU</span> 
                        <span className='day5__span'>FRI</span> 
                        <span className='day5__span'>SAT</span> 
                        <span className='day5__span'>SUN</span> 
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Day5