import React from 'react'
import { Link } from 'react-router-dom'
import "./dailyProgress.css"

const DailyProgress = ({jsonData}) => {
  // console.log(jsonData)
  return (
    <section className="section-progres-days w-100 m-auto">
        <h2 className='title h2'>DailyProgress</h2>
        <div className='progres-days'>
          {
              jsonData.map((item,i) => <Link key={`item-${i}`} to={`/days/${i + 1}`} className='day btn-success'>{i + 1}</Link>)
          }
          {
            new Array(100 - jsonData.length ).fill(0).map((item,i) => <div key={`no-item-${i}`} className='day'>{i + jsonData.length + 1}</div>)
          }
        </div>
    </section>
  )
}

export default DailyProgress