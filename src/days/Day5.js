import React, { useEffect, useState } from 'react'
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

    // tenerlo en string para quitar los dos primeros numeros
    // pasar a number antes de poner

    console.log("1".slice(0.2))
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
                        <div className='day5__bar-red'
                        style={{clipPath: `polygon(4% ${data.views.mon + 1}%, 20% ${data.views.tue + 1}%, 36% ${data.views.wed + 1}%, 52% ${data.views.thu + 1}%, 67% ${data.views.fri + 1}%, 81% ${data.views.sat + 1}%, 96% ${data.views.sun + 1}%, 96% ${data.views.sun + 4}%, 81% ${data.views.sat + 4}%, 67% ${data.views.fri + 4}%, 52% ${data.views.thu + 4}%, 36% ${data.views.wed + 4}%, 20% ${data.views.tue + 4}%, 4% ${data.views.mon + 4}%)`}}
                        ></div>
                        <div className='day5__bar-blue' 
                        style={{clipPath: `polygon(4% ${data.purchases.mon + 1}%, 20% ${data.purchases.tue + 1}%, 36% ${data.purchases.wed + 1}%, 52% ${data.purchases.thu + 1}%, 67% ${data.purchases.fri + 1}%, 81% ${data.purchases.sat + 1}%, 96% ${data.purchases.sun + 1}%, 96% ${data.purchases.sun + 4}%, 81% ${data.purchases.sat + 4}%, 67% ${data.purchases.fri + 4}%, 52% ${data.purchases.thu + 4}%, 36% ${data.purchases.wed + 4}%, 20% ${data.purchases.tue + 4}%, 4% ${data.purchases.mon + 4}%)`}}></div>
                        <div className='day5__circle-red day5__mon' style={{left: "3%",bottom:`${data.views.mon}%`}}>
                            <span className='day5__number-red'>{data.views.mon}</span>
                        </div>
                        <div className='day5__circle-red day5__tue' style={{left: "19%",bottom:`${data.views.tue}%`}}>
                           <span className='day5__number-red'>{data.views.tue}</span>
                        </div>
                        <div className='day5__circle-red day5__wed' style={{left: "35%",bottom:`${data.views.wed}%`}}>
                            <span className='day5__number-red'>{data.views.wed}</span>
                        </div>
                        <div className='day5__circle-red day5__thu' style={{left: "51%",bottom:`${data.views.thu}%`}}>
                            <span className='day5__number-red'>{data.views.thu}</span>
                        </div>
                        <div className='day5__circle-red day5__fri' style={{left: "66%",bottom:`${data.views.fri}%`}}>
                            <span className='day5__number-red'>{data.views.dri}</span>
                        </div>
                        <div className='day5__circle-red day5__sat' style={{left: "80%",bottom:`${data.views.sat}%`}}>
                            <span className='day5__number-red'>{data.views.sat}</span>
                        </div>
                        <div className='day5__circle-red day5__sun' style={{left: "95%",bottom:`${data.views.sun}%`}}>
                            <span className='day5__number-red'>{data.views.sun}</span>
                        </div>
                        <div className='day5__circle-blue day5__mon' style={{left: "3%",bottom:`${data.purchases.mon}%`}}>
                            <span className='day5__number-blue'>{data.purchases.mon}</span>
                        </div>
                        <div className='day5__circle-blue day5__tue' style={{left: "19%",bottom:`${data.purchases.tue}%`}}>
                            <span className='day5__number-blue'>{data.purchases.tue}</span>
                        </div>
                        <div className='day5__circle-blue day5__wed' style={{left: "35%",bottom:`${data.purchases.wed}%`}}>
                            <span className='day5__number-blue'>{data.purchases.wed}</span>
                        </div>
                        <div className='day5__circle-blue day5__thu' style={{left: "51%",bottom:`${data.purchases.thu}%`}}>
                            <span className='day5__number-blue'>{data.purchases.thu}</span>
                        </div>
                        <div className='day5__circle-blue day5__fri' style={{left: "66%",bottom:`${data.purchases.fri}%`}}>
                            <span className='day5__number-blue'>{data.purchases.fri}</span>
                        </div>
                        <div className='day5__circle-blue day5__sat' style={{left: "80%",bottom:`${data.purchases.sat}%`}}>
                            <span className='day5__number-blue'>{data.purchases.sat}</span>
                        </div>
                        <div className='day5__circle-blue day5__sun' style={{left: "95%",bottom:`${data.purchases.sun}%`}}>
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