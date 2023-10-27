import React from 'react'
import '../styles/Result.css'

function Result({ correctWords, time, onCountdownZero}) {
  function handleClick() {

  }
    return (
      <div className='result'>
        Correctly Spelled: {correctWords}
        <br />
        time : {time}
        <br />
        WPM : {(time == 15) ? parseInt(correctWords * 4) : (time == 30) ? parseInt(correctWords*2) : correctWords}
        {/* Time: {onTimeSelected} */}
        <br />
        <button onClick={() => onCountdownZero()}>Try Again</button>
      </div>
    );
  }

export default Result