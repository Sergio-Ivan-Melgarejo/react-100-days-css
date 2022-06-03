import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

//Context
import LanguageContext from '../Context/LanguageContext'

// Components
import Loader from './Loader'

// Days
import Day1 from "../days/Day1"
import Day2 from "../days/Day2"
import Day3 from '../days/Day3'
import Day4 from '../days/Day4'
import Day5 from '../days/Day5'
import Day6 from '../days/Day6'
import Day7 from '../days/Day7'
import Day8 from '../days/Day8'
import Day9 from '../days/Day9'
import Day10 from '../days/Day10'
import Day11 from '../days/Day11'
import Day12 from '../days/Day12'
import Day13 from '../days/Day13'
import Day14 from '../days/Day14'
import Day15 from '../days/Day15'
import Day16 from '../days/Day16'
import Day17 from '../days/Day17'
import Day18 from '../days/Day18'
import Day19 from '../days/Day19'
import Day20 from '../days/Day20'
import Day21 from '../days/Day21'
import Day22 from '../days/Day22'
import Day23 from '../days/Day23'
import Day24 from '../days/Day24'
import Day25 from '../days/Day25'
import Day26 from '../days/Day26'
import Day27 from '../days/Day27'
import Day28 from '../days/Day28'
import Day29 from '../days/Day29'
import Day30 from '../days/Day30'
import Day31 from '../days/Day31'
import Day32 from '../days/Day32'
import Day33 from '../days/Day33'
import Day34 from '../days/Day34'
import Day35 from '../days/Day35'
import Day36 from '../days/Day36'
import Day37 from '../days/Day37'
import Day38 from '../days/Day38'
import Day39 from '../days/Day39'
import Day40 from '../days/Day40'
import Day41 from '../days/Day41'
import Day42 from '../days/Day42'
import Day43 from '../days/Day43'
import Day44 from '../days/Day44'
import Day45 from '../days/Day45'
import Day46 from '../days/Day46'
import Day47 from '../days/Day47'
import Day48 from '../days/Day48'
import Day49 from '../days/Day49'
import Day50 from '../days/Day50'
import Day51 from '../days/Day51'

const Card = () => {  
  // Select Day
  const params = useParams()

  const {daysData, pageData} = useContext(LanguageContext)

  let dayNum = parseInt(params.num) || 1;  
  if(dayNum > daysData.length) dayNum = daysData.length;
  if(dayNum < 1) dayNum = 1;

  const days = () => {
    if(!isNaN(dayNum)){
      switch(dayNum){
        case 1:
        return <Day1 />
        case 2:
        return <Day2 />
        case 3:
        return <Day3 />
        case 4:
        return <Day4 />
        case 5:
        return <Day5 />
        case 6:
        return <Day6 />
        case 7:
        return <Day7 />
        case 8:
        return <Day8 />
        case 9:
        return <Day9 />
        case 10:
        return <Day10 />
        case 11:
        return <Day11 />
        case 12:
        return <Day12 />
        case 13:
        return <Day13 />
        case 14:
        return <Day14 />
        case 15:
        return <Day15 />
        case 16:
        return <Day16 />
        case 17:
        return <Day17 />
        case 18:
        return <Day18 />
        case 19:
        return <Day19 />
        case 20:
        return <Day20 />
        case 21:
        return <Day21 />
        case 22:
        return <Day22 />
        case 23:
        return <Day23 />
        case 24:
        return <Day24 />
        case 25:
        return <Day25 />
        case 26:
        return <Day26 />
        case 27:
        return <Day27 />
        case 28:
        return <Day28 />
        case 29:
        return <Day29 />
        case 30:
        return <Day30 />
        case 31:
        return <Day31 />
        case 32:
        return <Day32 />
        case 33:
        return <Day33 />
        case 34:
        return <Day34 />
        case 35:
        return <Day35 />
        case 36:
        return <Day36 />
        case 37:
        return <Day37 />
        case 38:
        return <Day38 />
        case 39:
        return <Day39 />
        case 40:
        return <Day40 />
        case 41:
        return <Day41 />
        case 42:
        return <Day42 />
        case 43:
        return <Day43 />
        case 44:
        return <Day44 />
        case 45:
        return <Day45 />
        case 46:
        return <Day46/>
        case 47:
        return <Day47 />
        case 48:
        return <Day48 />
        case 49:
        return <Day49 />
        case 50:
        return <Day50 />
        case 51:
        return <Day51 />
        default: return <Day51 />
      }
    }
    return <Day1
     />
  }

  const [reset, setReset] = useState(false);
  const hancleResicle = () => {
    setReset(true)
    setTimeout(()=>{
      setReset(false)
    },500)
  }

  return (
    <div className='container-project p-0 pt-5 pt-md-0 text-start'>
    {
      reset
      ?   <Loader />
      :   days()
    }
    <div className='card__footer'>
      <div className="container-button">
        <Link to={`/days/${dayNum <= 1 ? (daysData.length) : dayNum - 1}`} className="button-change">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </Link>
        <span className='span'>{pageData.pages.home["box-2"]}</span>
        <Link to={`/days/${dayNum >= daysData.length ? 1 : (dayNum + 1)}`} className="button-change">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
        </Link>
        </div>
        <div className='container-button'>
          <a href={daysData[dayNum - 1].codepen} target="_blank" rel="noreferrer" className='codePen'>
            <svg viewBox="0 0 100 100" fill="currentColor"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg>
          </a>
          <button onClick={hancleResicle} className='reset'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          </button>
        </div>
    </div>
  </div>
  )
}

export default Card