import React from 'react'
import "./home.css"

import { Outlet, useParams } from 'react-router-dom'
import InfoCard from "../components/InfoCard"
import Card from '../components/Card'


const Home = ({jsonData}) => {
  const params = useParams()
  // console.log(params)

  let day = parseInt(params.day) || 1;

  if(day > jsonData.length) day = 1
  if(day < 1) day = (jsonData.length - 1)
  // console.log(day)

  return (
    <header className='row main-app home'>
        <InfoCard day={{...jsonData[day - 1], num: (day)}} />
        {params.day?  <Outlet /> : <Card jsonData={jsonData} />}
        {/* {params.day?  <h1>si</h1> : <h1>no</h1>} */}
    </header>
  )
}

export default Home