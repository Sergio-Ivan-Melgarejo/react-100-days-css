import React, { useState } from 'react'
import "./day15.css"

const Day15 = () => {
    const [isDraging, setIsDraging] = useState(false)
    const [select, setSelect] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [uploaded, setUploaded] = useState(false)
    const [fileName, setfileName] = useState(null)

    const changed = (e) =>{
        setSelect(true);
        setfileName(e.target.files[0].name)
    }

    const upload = () =>{
        if(select){
            setSelect(false)
            setUploading(true)
            setTimeout(()=>{
                setUploading(false)
                setUploaded(true)
                console.log("paso")
            },3000)
        }

        if(uploaded){
            setUploaded(false)
            setfileName(null)
        }
    }

    return (
        <div className={
            + select ? "days day15 select" 
            : uploading ? "days day15 uploading"
            : uploaded ? "days day15 uploaded" 
            : "days day15"
            }>
            <div className="day15__card ">
                <h1 className='day15__h1'>Drop file to upload</h1>
                <div className='day15__bar'>
                    <div className='day15__progres'></div>
                </div>
                <div 
                onDragOver={()=>setIsDraging(true)}
                onDragLeave={()=>setIsDraging(false)}
                className={isDraging ? 'day15__dropzone drop' : "day15__dropzone"}>
                    <svg className='day15__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"/>
                    </svg>
                    <span className='day15__file-name'>{fileName}</span> 
                    <input onChange={changed} className='day15__input' type="file"></input>

                    {
                        uploading
                        ?
                            <svg className='day15__upload day15__uploading' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"/>
                            </svg>
                        : 
                            null
                    }
                    {
                        uploaded
                        ?
                            <svg className='day15__upload day15__uploaded' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>
                            </svg>
                        : 
                            null
                    }
                </div>
                <button onClick={upload} className='day15__btn'>
                    {
                        uploaded ?  "Done"
                        : uploading ?  "Uploading..." 
                        : "Upload file"

                    }
                </button>
            </div>
        </div>
  )
}

export default Day15

