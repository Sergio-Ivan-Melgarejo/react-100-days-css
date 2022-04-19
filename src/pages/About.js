import React, { useContext } from 'react'
import LanguageContext from '../Context/LanguageContext'
import "./about.css"

const About = () => {
    const {pageData} = useContext(LanguageContext)
    

    return (
        <div className='main-app about row'>
            <section className='section col-12 row m-auto'>
                <div className='izquierda col-12 col-sm-10 col-md-8 col-lg-6 m-auto'>
                    <h1 className='title fw-bolder'>{pageData.general.h1}</h1>
                    <h2 className='h1'>{pageData.pages.about["box-1"].h2} <span className='color'>{pageData.pages.about["box-1"]["h2-span"]}</span></h2>
                    <p className='text'>{pageData.pages.about["box-1"]["text-1"]}</p>
                    <p className='text'>{pageData.pages.about["box-1"]["part-1-of-text-2"]} <a href='https://codepen.io/' className='color' target="_blank" rel='noreferrer'>CodePen</a> {pageData.pages.about["box-1"]["part-2-of-text-2"]}</p>
                    <p className='text'>{pageData.pages.about["box-1"]["text-3"]}</p>
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
                                <p className='line-right'><span className='code-color-1'>for</span> (<span className='code-color-1'>let</span> <span className='code-color-4'>{pageData.pages.about["box-2"]["variable"]}</span> = <span className='code-color-3'>1</span>; <span className='code-color-4'>{pageData.pages.about["box-2"]["variable"]}</span> {"<="} <span className='code-color-3'>100</span>; <span className='code-color-4'>{pageData.pages.about["box-2"]["variable"]}</span>++)</p>
                                <p className='line-right'><span className='code-color-2'>{pageData.pages.about["box-2"]["function-1"]}</span>( )</p>
                                <p className='line-right'><span className='code-color-2'>{pageData.pages.about["box-2"]["function-2"]}</span>( )</p>
                                <p className='line-right'><span className='code-color-2'>{pageData.pages.about["box-2"]["function-3"]}</span>( )</p>
                                <p className='line-right'><span className='code-color-2'>{pageData.pages.about["box-2"]["function-4"]}</span>( )</p>
                                <br/>
                                <p className='line-right'><span className='code-color-1'>if</span> (<span className='code-color-4'>{pageData.pages.about["box-2"]["variable"]}</span> === <span className='code-color-3'>100</span>)</p>
                                <p className='line-right'><span className='code-color-2'>{pageData.pages.about["box-2"]["function-5"]}</span>()</p>
                                <p className='line-right'>{"}"}</p>
                                <p className='line-right'>{"}"}</p>
                            </p>
                        </div>
                    </div>    
                </div>
            </section>
        </div>
    )
}

export default About