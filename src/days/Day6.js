import React from 'react'
import "./day6.css"

const Day6 = () => {
  return (
    <div className='days day6'>
        <section className='day6__card'>
            <div className='day6__left'>
                <div className='day6__container-img'>
                    <div className='day6__circle'></div>
                    <div className='day6__circle'></div>
                    <img className='day6__img' src='https://api.lorem.space/image/face?w=150&h=150' alt='face'/>
                </div>
                <h1 className='day6__h1'>Anonimous</h1>
                <h2 className='day6__h2'>hacker</h2>
                <div className='day6__container-button'>
                    <button className='day6__btn'>Follow</button>
                    <button className='day6__btn'>Message</button>
                </div>
            </div>
            <div className='day6__right'>
                <div className='day6__box'>
                    <span className='day6__num'>523</span>
                    <span className='day6__text'>Posts</span>
                </div>
                <div className='day6__box'>
                    <span className='day6__num'>1387</span>
                    <span className='day6__text'>Likes</span>
                </div>
                <div className='day6__box'>
                    <span className='day6__num'>146</span>
                    <span className='day6__text'>Follower</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Day6