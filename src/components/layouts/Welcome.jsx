import React from 'react'

function Welcome(props) {
    const {name, setName, handleCreateAccount} = props

  return (
    <>
        <section id='welcome'>
            <h3 className='text-large special-shadow'>
                365 days.<br/> 365 words.
            </h3>
            <h6>Build your lexicon. <br/> Start the challenge today</h6>
            <div>
                <input type='text' placeholder='enter your name...' value={name}
                onChange={(e) =>{
                    setName(e.target.value)
                }}
                />
                <button onClick={handleCreateAccount} disabled={!name}>
                    <h6>Start &rarr;</h6>
                </button>
            </div>
        </section>
    </>
    
  )
}

export default Welcome