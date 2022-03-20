import React from 'react'
import "./home.css"

import { Outlet, useParams } from 'react-router-dom'
import InfoCard from "../components/InfoCard"
import Card from '../components/Card'

const Home = () => {
  const params = useParams()
  console.log(params)
  return (
    <header className='row main-app home text-center text-md-start'>
        <InfoCard />
        {params ? <Card  /> : <Outlet />}
    </header>
  )
}

export default Home