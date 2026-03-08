import React from 'react'
import ProgressBar from './ProgressBar'
import { calcLevel, calculateAccuracy, calculateNewWords } from '../utils'
function Stats(props) {
const {name, day, attempts, PLAN} = props

const currlev = calcLevel(day)
const flooredlvl = Math.floor(currlev)
const reminder = (currlev - flooredlvl) * 100
  return (
    <div className='card stats-card'>
      <div className='welcome-text'>
        <h6>Welcome</h6>
        <h4 className='text-large'>
          {name}
        </h4>
      </div>
      <div className='stats-column'>
        <div>
          <p>Streak 🔥</p>
          <h4>{day - 1}</h4>
        </div>
         <div>
          <p>word seen</p>
          <h4>{calculateNewWords(day - 1)}</h4>
        </div>
         <div>
          <p>ccuracy %</p>
          <h4>{(calculateAccuracy(attempts, day)).toFixed(1) * 100}</h4>
        </div>
      </div>
      <ProgressBar text={`lvl  ${flooredlvl}`}  reminder={reminder}/>
    </div>
  )
}

export default Stats