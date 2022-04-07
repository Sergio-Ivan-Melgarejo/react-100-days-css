import React from 'react'
import "./home.css"

import { Outlet, useParams } from 'react-router-dom'
import InfoCard from "../components/InfoCard"
import Card from '../components/Card'

const Home = (props) => {
  const params = useParams()
  console.log(props,params)

  const day = parseInt(params.day) || 1;

  return (
    <header className='row main-app home text-center text-md-start'>
        <InfoCard day={props.days ? props.days[params.day] : null} />
        {params.day?  <Outlet /> : <Card />}
    </header>
  )
}

export default Home