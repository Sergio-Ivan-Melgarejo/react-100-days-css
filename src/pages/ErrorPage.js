import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LanguageContext from '../Context/LanguageContext'

const ErrorPage = () => {
  const {pageData} = useContext(LanguageContext)
  return (
    <div className='errorPage text-center py-5'>
        <h1 className='pt-5 h1'>Error 404</h1>
        <p className='text py-3'>{pageData.pages.error.text}</p>
        <Link to={"/"} className="button p-2 px-5 rounded" >{pageData.pages.error.button}</Link>
    </div>
  )
}

export default ErrorPage