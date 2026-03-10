import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import {isEncountered, shuffle} from '../../utils'
import DEFINITION from '../utilis/VOCAB.json'

function Challenge(props) {
    const {day, daysWords, handleChange, handleIncrementAttempts, handleCompleteDay, PLAN} = props

    const[wordIndex, setWordIndex] = useState(0)
    const [inputVal, setInputVal] = useState('')
    const [showDefinition, setShowDefinition] = useState(false)
    const [lostToLearn, setListToLearn] = useState([
        ...daysWords,
        ...shuffle(daysWords),
        ...shuffle(daysWords),
        ...shuffle(daysWords),

    ])
    const word = setListToLearn[wordIndex]
    const isNewWord = showDefinition || (!isEncountered(day, word)
    && wordIndex < daysWords.length)
    const definiton = DEFINITION[word]
  return (
    <>
    <section id='challenge'>
        <h1>{word}</h1>
        <p>in excellen order</p>
        <div className='helper'>
            <div>
                {/* the error correction bars come into this div */}
                {[...Array(definiton.length).keys()]
                .map((element, elementIdx) =>{
                    // determine whether or not the user has typed the corrected character or not
                    return(
                        <div key={elementIdx}></div>
                    )
                })}
            </div>
            <input type='text' placeholder='Enter the definiton..'/>

          <div className='challenge-btns'>
              <button className='card-button-secondary'>
                <h6>Quit</h6>
            </button>
            <button className='card-button-primary'>
                <h6>I forgot</h6>
            </button>
          </div>
        </div>
        <ProgressBar />
    </section>
    </>
  )
}

export default Challenge