import React from 'react'

function Welcome() {
  return (
    <>
        <section id='welcome'>
            <h3 className='text-large special-shadow'>
                365 days.<br/> 365 words.
            </h3>
            <h6>Build your lexicon. <br/> Start your challenge today</h6>
            <div>
                <input type='text' placeholder='enter your name...'/>
                <button>
                    <h6>Start &rr;</h6>
                </button>
            </div>
        </section>
    </>
    
  )
}

export default Welcome