import React from 'react'
import "./home.css"

import { Outlet, useParams } from 'react-router-dom'
import InfoCard from "../components/InfoCard"
import Card from '../components/Card'

const Home = (props) => {
  const params = useParams()
  console.log(props,params)
  console.log(props.days)
  return (
    <header className='row main-app home text-center text-md-start'>
        <InfoCard days={props.days} day={params.day} />
        {params.day?  <Outlet /> : <Card />}
    </header>
  )
}

export default Home