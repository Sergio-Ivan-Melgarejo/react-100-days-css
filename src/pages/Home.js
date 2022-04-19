import React from 'react'
import "./home.css"

import InfoCard from "../components/InfoCard"
import Card from '../components/Card'

const Home = () => {
  return (
    <header className='row main-app home p-0'>
        <InfoCard />
        <Card />
    </header>
  )
}

export default Home