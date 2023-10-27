import React, { useState, useEffect } from 'react';
import '../styles/Timer.css';

function Timer() {
  const [countdown, setCountdown] = useState(0);
  const [selectedTime, setSelectedTime] = useState();

  useEffect(() => {
    let timeInterval;

    if (countdown > 0) {
      timeInterval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      clearInterval(timeInterval);
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [countdown]);

  function handleButtonClick(value) {
    switch (value) {
      case '15s':
        setSelectedTime(15);
        setCountdown(15);
        break;
      case '30s':
        setSelectedTime(30);
        setCountdown(30); 
        break;
      case '60s':
        setSelectedTime(60);
        setCountdown(60); 
        break;
      default:
        setSelectedTime(15);
        setCountdown(15); 
    }
  }

  return (
<div className='timer'>
      <div className='left'>
        <span className='current__time'>{countdown}</span>
      </div>
      <div className='right'>
        <button className='options' onClick={() => handleButtonClick('15s')}>
          15s
        </button>
        <button className='options' onClick={() => handleButtonClick('30s')}>
          30s
        </button>
        <button className='options' onClick={() => handleButtonClick('60s')}>
          60s
        </button>
      </div>
    </div>
  );
}

export default Timer;
