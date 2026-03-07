import React from 'react'

function Stats() {

const name = "James"


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
          <p>Streatk </p>
        </div>
      </div>
    </div>
  )
}

export default Stats