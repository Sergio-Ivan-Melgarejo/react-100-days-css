import React, { useState } from 'react'
import "./day41.css"

const Day41 = () => {
    const [dismiss, setDismiss] = useState("")
    return (
        <div className='days day41'>
            <div className={'day41__modal ' + dismiss}>
                <div className='day41__logo-container'>
                    <div className='day41__clip'></div>
                    <div className='day41__logo'>!</div>
                </div>
                <h1 className='day41__h1'>Oh no!</h1>
                <p className='day41__p'>Se ha producido un error al crear un informe de errores.</p>
                <button onClick={()=>setDismiss("dismiss")} className='day41__button'>Descartar</button>
            </div>
        </div>
  )
}

export default Day41