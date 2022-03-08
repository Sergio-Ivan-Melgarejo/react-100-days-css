import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='main-app about'>
        <section className='section row'>
            <div className='izquierda col-12 col-lg-6'>
                <h1 className='title fw-bolder'>100 DAYS CSS CHALLENGE</h1>
                <h2 className='h1'>what is <span className='color'>this?</span></h2>
                <p className='text'>For 100 consecutive days, I've written HTML and CSS snippets as a creative learning process for myself.</p>
                <p className='text'>I used <a href='https://codepen.io/' className='color' target="_blank" rel='noreferrer'>CodePen</a> to write and save my code and published my results every day on this website.</p>
                <p className='text'>After accomplishing my project on day 100, I've rewritten the website to let everyone else also join my challenge.</p>
            </div>
            <div className='derecha col-12 col-lg-6'>
                <div className='code-container my-5'>
                    <div className='top'>
                        <span className='circle'></span>
                        <span className='circle'></span>
                        <span className='circle'></span>
                    </div>
                    
                    


                </div>    
            </div>
        </section>
        <section className='section section-2'>
            <h2 className='title fw-bolder'>MY 100 DAYS CSS CHALLENGE</h2>
        </section>
    </div>
  )
}

export default About