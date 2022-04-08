import React from 'react'

const InfoCard = ({day}) => {
  return (
    <div className='izquierda col-12 col-md-5'>
        <h1 className='title'>100 DAYS CSS CHALLENGE</h1>
        <h2 className='h1'>Day <span className='color'>#{day.num}</span></h2>
        <p className='text'>
            <span className='span'>{day.title}: </span>
            {day.text}
        </p>
    </div>
  )
}

export default InfoCard