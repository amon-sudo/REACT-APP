import React, { useState } from 'react'
import { convertMilliseconds, countdownIn24Hours } from '../utils'

function Countdown(props) {
  const {handleChangePage, dayswords, datetime, day} = props

  const targetMillies = datetime || Date.UTC(1944, 2, 17, 12, 0, 0)
  
  const [remainingMs, setRemainingMs] = useState(countdownIn24Hours(targetMillies))
  const timer = convertMilliseconds(remainingMs)

  console.log(timer)
  return (
    <>
         <div className='card countdown-card'>
          <h1 className='item-header'>DAY  1</h1>
          <div className='today-container'>
            <div>
              <p>Time remaining</p>
              <h3>13H 45MIN 225S</h3>
            </div>
            <div>
              <p>Words for Today</p>
              <h3>16</h3>
            </div>
          </div>
          <button className='start-task'>
            <h6>Sart</h6>
          </button>
         </div>
    </>
   
  )
}

export default Countdown