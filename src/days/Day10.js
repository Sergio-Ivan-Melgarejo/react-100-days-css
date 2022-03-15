import React, { useEffect, useState } from 'react'
import "./day10.css"

const Day10 = () => {
    const [firstLine, setFirstLine] = useState(null)
    const [secondLine, setSecondLine] = useState(null)
    const [thirdLine, setThirdLine] = useState({})
    

    useEffect(() => {
        const stopInterval = setInterval(getDateTime, 1000);

        function dayToday(dayNum){
            const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
            return dayArr[dayNum]	
        }

        function	monthToday(monthNum){
            const monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
            return monthArr[monthNum];
        }

        function addZero(min){
            return min<10 ? `0${min}`: min;
        }

        function getDateTime(){
            const dateTime = new Date();
            let day, date, month, year, hour, minute;
            day = dayToday(dateTime.getDay());
            date = dateTime.getDate();
            month = monthToday(dateTime.getMonth());
            year = dateTime.getFullYear();
            hour = dateTime.getHours();
            minute = addZero(dateTime.getMinutes());        

            setFirstLine(`${day} ${date} ${month} ${year}`)
            setSecondLine(`${hour}:${minute}`)
            setThirdLine({heart:79, cal:698})
        }
    
      return () => {
        clearInterval(stopInterval)
      }
    }, [])

  return (
    <div className={secondLine ? "days day10 active" : 'days day10'}>
        <div className='day10__circle'>
            <svg className='day10__svg' width="200px" height="200px" viewBox="0 0 200 200">
                <circle className=""cx="100" cy="100" r="80" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="1 11"></circle>
                <circle className="day10__loaded" cx="100" cy="100" r="85" fill="none" stroke="#F85B5B" strokeWidth="2" strokeDasharray="565"></circle>
            </svg>
            <div className='day10__container'>
                <p className='day10__first-line'>{firstLine && firstLine}</p>
                <h1 className='day10__second-line'>{secondLine ? secondLine : "Loading..."}</h1>
                {
                    secondLine && (
                        <p className='day10__third-line'>
                            <span>
                                <i className="day10__heart fa fa-heart" aria-hidden="true"/>
                                {thirdLine.heart}
                            </span>
                            <span>
                                {thirdLine.cal} kcal
                            </span>
                        </p>
                    )
                }
            </div>
        </div> 
    </div>
  )
}

export default Day10