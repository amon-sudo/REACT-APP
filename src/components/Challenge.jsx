import React from 'react'

function Challenge() {
    const word = "copacitic"
    const definiton = "in excellent order"
  return (
    <>
    <section id='challlenge'>
        <h1>{word}</h1>
        <p>in excellen order</p>
        <div className='helper'>
            <div>
                {/* the error correction bars come into this div */}
                {[...Array(definiton.length).keys()]
                .map((element, elementIdx) =>{
                    return(
                        <div key={elementIdx}>aa</div>
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}

export default Challenge