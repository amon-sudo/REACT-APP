import React from 'react'
import ProgressBar from './ProgressBar'

function Challenge() {
    const word = "copacitic"
    const definiton = "in excellent order"
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