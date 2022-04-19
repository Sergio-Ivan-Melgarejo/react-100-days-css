import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import LanguageContext from '../Context/LanguageContext'

const InfoCard = () => {
  const {daysData, pageData} = useContext(LanguageContext)

  let num = useParams();
  num = num.num ? num.num : 1;
  
  return (
    <div className='izquierda py-5 col-12 col-md-5 text-center text-md-start'>
        <h1 className='title'>{pageData.general.h1}</h1>
        <h2 className='h1'>{pageData.pages.home["box-1"].h2} <span className='color'>#{num}</span></h2>
        <p className='text'>
            <span className='span'>{daysData[(num - 1)].title}: </span>
            {daysData[(num - 1)].text}
        </p>
    </div>
  )
}

export default InfoCard