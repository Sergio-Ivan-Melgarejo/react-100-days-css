import React from 'react'
import "./day40.css"

const Day40 = () => {
    const handleClick = (e) =>{
        const item = e.target.classList.value;
        if(item.includes("day40__img")){
            e.target.classList.toggle("active");
        }
    }   

    return (
        <div onClick={handleClick} className='days day40'>
            <img className='day40__img' src='https://loremflickr.com/400/400' alt='cat' />
            <img className='day40__img' src='https://www.fillmurray.com/400/400' alt='fillmurray' />
            <img className='day40__img' src='https://placekitten.com/400/400' alt='cat' />
            <img className='day40__img' src='https://baconmockup.com/400/400' alt='baconmockup' />
            <img className='day40__img' src='https://placebeard.it/400/400' alt='beard' />
            <img className='day40__img' src='https://www.placecage.com/400/400' alt='Nicholas Cage' />
            <img className='day40__img' src='https://placebear.com/400/400' alt='bear' />
            <img className='day40__img' src='https://picsum.photos/400/400' alt='Steven Seagal' />
            <img className='day40__img' src='https://www.stevensegallery.com/400/400' alt='cat' />
        </div>
  )
}

export default Day40