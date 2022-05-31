import React, { useContext } from 'react'
import LanguageContext from '../Context/LanguageContext'

import { Link } from 'react-router-dom'

import img from "../img/undraw_developer_activity_re_39tg.svg"

const Join = () => {
  const {pageData} = useContext(LanguageContext)

  return (
    <div className='join row text-sm-center text-lg-start my-5'>
      <section className='col-12 col-sm-10 col-md-8 col-lg-5 my-5 m-auto'>
        <h1 className='title'>{pageData.general.h1}</h1>
          <h2 className='h1'>
            {pageData.pages.join["box-1"].h2} 
            <span className='color'>{pageData.pages.join["box-1"]["h2-span"]}</span>
          </h2>
          <p className='text'>
            {pageData.pages.join["box-1"]["part-1-of-text-1"]}
            <a href='https://codepen.io/' className='color' target="_blank" rel='noreferrer'> CodePen</a> 
            {pageData.pages.join["box-1"]["part-2-of-text-1"]}
          </p>
          <p className='text'>
            {pageData.pages.join["box-1"]["part-1-of-text-2"]} 
            <Link to='/' className='color'>{pageData.pages.join["box-1"]["a-1"]}</Link> 
            {pageData.pages.join["box-1"]["part-2-of-text-2"]}
            <a href='https://codepen.io/pen?template=wMQKOq&editors=1100' className='color' target="_blank" rel="noreferrer" >template</a>
            {pageData.pages.join["box-1"]["part-3-of-text-2"]}
          </p>
          <p className='text'>{pageData.pages.join["box-1"]["text-3"]}</p>
          <p className='text'>
            {pageData.pages.join["box-1"]["part-1-of-text-4"]}
            <Link to="/progress/" className='color'>{pageData.pages.join["box-1"]["a-2"]}</Link> 
            {pageData.pages.join["box-1"]["part-2-of-text-4"]}
            <a  href="https://100dayscss.com/" target="_blank" rel="noreferrer" className='color'> {pageData.pages.join["box-1"]["a-3"]}</a>.
            </p>
      </section>
      <section className='d-none d-lg-block m-auto col-5'>
        <img src={img} alt="developer" className="img-fluid" />
      </section>
    </div>
  )
}

export default Join