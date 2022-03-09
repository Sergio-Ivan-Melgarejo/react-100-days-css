import React from 'react'
import "./dailyProgress.css"

const DailyProgress = () => {
  return (
    <section className="section-progres-days w-100 m-auto">
        <h2 className='title h2'>DailyProgress</h2>
        <div className='progres-days'>
            {new Array(100).fill(0).map((item,i) => <div className='day'>{i + 1}</div>)}
        </div>
    </section>
  )
}

export default DailyProgress