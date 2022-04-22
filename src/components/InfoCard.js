import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import LanguageContext from '../Context/LanguageContext'

const InfoCard = () => {
  const {daysData, pageData} = useContext(LanguageContext)

  const params = useParams()
  let dayNum = parseInt(params.num) || 1;  
  if(dayNum > daysData.length) dayNum = daysData.length;
  if(dayNum < 1) dayNum = 1;

  return (
    <div className='izquierda py-5 col-12 col-md-5 text-center text-md-start'>
        <h1 className='title'>{pageData.general.h1}</h1>
        <h2 className='h1'>{pageData.pages.home["box-1"].h2} <span className='color'>#{dayNum}</span></h2>
        <p className='text'>
            <span className='span'>{daysData[dayNum - 1].title}: </span>
            {daysData[dayNum - 1].text}
        </p>
    </div>
  )
}

export default InfoCard