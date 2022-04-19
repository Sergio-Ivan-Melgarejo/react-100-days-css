import React, { useContext } from 'react'
import "./buttonLanguage.css"

import imgSpanish from "../image/espana.png"
import imgEnglish from "../image/estados-unidos.png"
import LanguageContext from '../Context/LanguageContext'

const ButtonLanguage = () => {
    const {language, handleLanguage} = useContext(LanguageContext)

    return (
        <button onClick={handleLanguage} className='buttonLanguage'>
            <img src={language === "En" ? imgEnglish : imgSpanish}  alt="" />
        </button>
    )
}

export default ButtonLanguage