import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='errorPage text-center py-5'>
        <h1 className='pt-5'>Error 404</h1>
        <p className='text py-3'>Page not found</p>
        <Link to={"/"} className="btn-outline-primary p-2 px-5 rounded " >Back to Home</Link>
    </div>
  )
}

export default ErrorPage