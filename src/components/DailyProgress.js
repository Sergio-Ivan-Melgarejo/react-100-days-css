import React from 'react'
import { Link } from 'react-router-dom'
import "./dailyProgress.css"

const DailyProgress = ({daysData, title}) => {
  return (
    <section className="section-progres-days w-100 m-auto">
        <h2 className='title h2'>{title}</h2>
        <div className='progres-days'>
          {
              daysData.map((item,i) => <Link key={`item-${i}`} to={`/days/${i + 1}`} className='day btn-success'>{i + 1}</Link>)
          }
          {
            new Array(100 - daysData.length ).fill(0).map((item,i) => <div key={`no-item-${i}`} className='day'>{i + daysData.length + 1}</div>)
          }
        </div>
    </section>
  )
}

export default DailyProgress