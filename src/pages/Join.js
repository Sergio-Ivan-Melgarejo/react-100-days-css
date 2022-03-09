import React from 'react'
import { Link } from 'react-router-dom'

import img from "../img/undraw_developer_activity_re_39tg.svg"

const Join = () => {
  return (
    <div className='join row text-sm-center text-lg-start my-5'>
      <section className='col-12 col-sm-10 col-md-8 col-lg-5 my-5 m-auto'>
        <h1 className='title'>100 DAYS CSS CHALLENGE</h1>
          <h2 className='h1'>How can I <span className='color'>join?</span></h2>
          <p className='text'>All you need to get started with the challenge is a <a href='https://codepen.io/' className='color' target="_blank" rel='noreferrer'>CodePen</a> account and a passion for programming (yes, I assumed that writing HTML & CSS is programming).</p>
          <p className='text'>The <Link to='/' className='color'>homepage</Link> shows every day a different challenge which you can complete. Use the provided <a href='https://codepen.io/pen?template=wMQKOq&editors=1100' className='color' target="_blank" rel="noreferrer" >template</a>, be creative and recreate the example in your own way.</p>
          <p className='text'>If you miss a day, you can simply change the day by clicking on the arrow icons below the example on the homepage and submit your result later.</p>
          <p className='text'>You can check your progress at any time <Link to="/progress/" className='color'>here</Link> and if you are dedicated, you might even make it to the <Link to="/leaderboard/" className='color'>leaderboard</Link>.</p>
      </section>
      <section className='d-none d-lg-block m-auto col-5'>
        <img src={img} alt="developer" className="img-fluid" />
      </section>
    </div>
  )
}

export default Join