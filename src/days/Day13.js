import React, { useState } from 'react'
import "./day13.css"

const Day13 = () => {
    const [imgSeleted, setImgSeleted] = useState(false)
  return (
    <div className={imgSeleted ? 'days day13' : 'days day13 active'}>
        <div onClick={()=>setImgSeleted(!imgSeleted)} className="day13__item">
            <img src="https://picsum.photos/id/125/400/400" alt="random image" />
            <div className='day13__container-plus'> 
                <span className='day13__plus'>+</span>
            </div>
        </div>
        <div onClick={()=>setImgSeleted(!imgSeleted)} className="day13__item">
            <img src="https://picsum.photos/id/1020/400/400" alt="random image" />
            <div className='day13__container-plus'> 
                <span className='day13__plus'>+</span>
            </div>
        </div>
        <div onClick={()=>setImgSeleted(!imgSeleted)} className="day13__item">
            <img src="https://picsum.photos/id/1015/400/400" alt="random image" />
            <div className='day13__container-plus'> 
                <span className='day13__plus'>+</span>
            </div>
        </div>
        <div onClick={()=>setImgSeleted(!imgSeleted)} className="day13__item">
            <img src="https://picsum.photos/id/69/400/400" alt="random image" />
            <div className='day13__container-plus'> 
                <span className='day13__plus'>+</span>
            </div>
        </div>

        <div className='day13__user-top'>
            <img className='day13__background' src='https://picsum.photos/id/10/800/400' alt='background' />
        </div>
        
        <div className='day13__user-bottom'>
            <h1 className='day13__user-name'>@User-0123</h1>
            <footer className='day13__footer'>
                <i class="fas fa-phone"></i>
                <i class="fas fa-comment"></i>
                <i class="fas fa-heart"></i>
            </footer>
        </div>

        <button onClick={()=>setImgSeleted(!imgSeleted)} className='day13__close'>x</button>

        <div className='day13__container-img-user'>
            <img className='day13__user-img' src="https://picsum.photos/id/1005/150/150" alt="user" />
        </div>
    </div>
  )
}

export default Day13