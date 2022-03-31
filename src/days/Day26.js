import React, { useState } from 'react'
import "./day26.css"

const getData = [
    {
        title:"El Sofá",
        text:"Si quieres crecer, sal de tu zona de confort",
    },
    {
        title:"Fallar es Aprender",
        text:"Levántate, desempolvate, y empezar de nuevo.",
    },
    {
        title:"Flores y Arcoiris",
        text:"Siempre sé tu mismo, a menos que puedas ser un unicornio.",
    }
]

const getSelect = JSON.parse(localStorage.getItem("select"))

const Day26 = () => {
    const [data, setData] = useState(getData || [])
    const [select, setSelect] = useState(getSelect || 0)
    const [change, setChange] = useState(false)

    const handleClick = () => {
        setChange(true);
        setTimeout(()=>{
            setChange(false);
            if(data.length <= (select + 1)){
                setSelect(0);
                localStorage.setItem("select","0");
                return
            }
            if(data.length > select){
                setSelect(select + 1);
                localStorage.setItem("select",JSON.stringify(select + 1));
                return
            }
        },1000) 
    }

    return (
        <div className={change ? "days day26 change" : 'days day26'}>
            <section className='day26__card'>
                <h1 className='day26__h1'>{data[select].title}</h1>
                <p className='day26__p'>{data[select].text}</p>
                <button onClick={handleClick} className='day26__btn'>OK</button>
                <div className='day26__number'><span>{select + 1}</span></div>
            </section>
        </div>
    )
}

export default Day26