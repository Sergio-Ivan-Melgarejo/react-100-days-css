import React from 'react'

const InfoCard = (props) => {
  // console.log(props)
  return (
    <div className='izquierda col-12 col-md-5'>
        <h1 className='title'>100 DAYS CSS CHALLENGE</h1>
        <h2 className='h1'>Day <span className='color'>#</span></h2>
        <p className='text'>
            <span className='span'>: </span>
            An easy start into the challenge with a custom build number with gradient.
        </p>
    </div>
  )
}

export default InfoCard