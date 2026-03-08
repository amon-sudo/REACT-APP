import React from 'react'

function History(props) {
  const {history} = props
  const historyKeys = Object.keys(history)
  return (
    <div className='card history-card'>
                <h4>History</h4>
                  { historyKeys.length == 0 ? (
                  <p>You have no attempts! Press <b>Start</b> to begin a challenge ⭐</p>) 
                  :
                  (       <div className='history-list'>
              <div className='card-button-secondary'>
                  <p>Started</p>
                  <h6>March 25 2026</h6>
                      <div>
                        <p>Streak</p>
                        <h6>53</h6>
                      </div>
               </div>
          
          </div>
          )}
   
    </div>
  )
}

export default History