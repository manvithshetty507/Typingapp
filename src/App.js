import './App.css';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import Words from './components/Words';
import Feats from './components/Feats'
import ColorTags from './components/ColorTags';
import { ParaProvider } from './utils/ParaContext';
import React, { useState } from 'react'
import Result from './components/Result'


function App() {
  
  const [countdownReachedZero, setCountdownReachedZero] = useState(false);
  const [correctWords, setCorrectWords] = useState(0);
  const [time, setTime] = useState(300);

  const handleCountdownZero = () => {
    setCountdownReachedZero(!countdownReachedZero);
    if(countdownReachedZero) setCorrectWords(0);
  };

  return (
    <ParaProvider>
      <div className="App">
        <Navbar />
        <Timer onCountdownZero={handleCountdownZero} setTime={setTime}/>
        {countdownReachedZero ? (
          <Result correctWords={correctWords} time={time} onCountdownZero={handleCountdownZero}/> 
        ) : (
          <Words setCorrectWords={setCorrectWords} />
        )}
        <Feats />
        <ColorTags />
      </div>
    </ParaProvider>
  );
}

export default App;
