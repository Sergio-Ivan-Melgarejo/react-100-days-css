import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext();
export default LanguageContext;

const getLanguage = localStorage.getItem("language") || "En";
const getPageData = require(`../Language/${getLanguage === "En" ? "english" : "spanish"}.json`); 
const getDaysData = require(`../Data/DataDays${getLanguage}.json`);

function LanguageProvider ({children}) {
    const [language, setLanguage] = useState(getLanguage)
    const [pageData, setPageData] = useState(getPageData)
    const [daysData, setdaysData] = useState(getDaysData)

    useEffect(() => {
        const getPageData = require(`../Language/${language === "En" ? "english" : "spanish"}.json`); 
        setPageData(getPageData)
        const getDaysData = require(`../Data/DataDays${language}.json`); 
        setdaysData(getDaysData)
    }, [language])
    
    const handleLanguage = () => {
        if(language === "En" ){
           setLanguage("Es")
           localStorage.setItem("language","Es") 
        }
        if(language === "Es" ){
            setLanguage("En")
            localStorage.setItem("language","En")
        }

    }

    const data = { daysData, pageData, language, handleLanguage}

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}
export {LanguageProvider}


