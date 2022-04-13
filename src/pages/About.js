import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='main-app about row'>
        <section className='section col-12 row m-auto'>
            <div className='izquierda col-12 col-sm-10 col-md-8 col-lg-6 m-auto'>
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
                    <div className='row d-flex flex-row'>
                        <div className='bard-izq col-2 d-flex flex-column p-0'>
                            <span className='num-line w-100'>1</span>
                            <span className='num-line w-100'>2</span>
                            <span className='num-line w-100'>3</span>
                            <span className='num-line w-100'>4</span>
                            <span className='num-line w-100'>5</span>
                            <span className='num-line w-100'>6</span>
                            <span className='num-line w-100'>7</span>
                            <span className='num-line w-100'>8</span>
                            <span className='num-line w-100'>9</span>
                            <span className='num-line w-100'>10</span>
                            <span className='num-line w-100'>11</span>
                        </div>
                        <p className="col code-right">
                            <p className='line-right'><span className='code-color-1'>for</span> (<span className='code-color-1'>let</span> <span className='code-color-4'>day</span> = <span className='code-color-3'>1</span>; <span className='code-color-4'>day</span> {"<="} <span className='code-color-3'>100</span>; <span className='code-color-4'>day</span>++)</p>
                            <p className='line-right'><span className='code-color-2'>getAnIdea</span>( )</p>
                            <p className='line-right'><span className='code-color-2'>writeHTML</span>( )</p>
                            <p className='line-right'><span className='code-color-2'>writeCSS</span>( )</p>
                            <p className='line-right'><span className='code-color-2'>beHappy</span>( )</p>
                            <br/>
                            <p className='line-right'><span className='code-color-1'>if</span> (<span className='code-color-4'>day</span> === <span className='code-color-3'>100</span>)</p>
                            <p className='line-right'><span className='code-color-2'>celebrate</span>()</p>
                            <p className='line-right'>{"}"}</p>
                            <p className='line-right'>{"}"}</p>
                        </p>
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