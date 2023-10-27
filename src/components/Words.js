import React, { useState, useEffect } from 'react';
import '../styles/Words.css';

function Words() {
  const [para, setPara] = useState("I am become death destroyer of the world");
  const [userInput, setUserInput] = useState("");
  const [wordsArray, setWordsArray] = useState(para.split(" "));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [letterClasses, setLetterClasses] = useState([]);
  const [dummy, setDummy] = useState(wordsArray[currentIndex]);

  useEffect(() => {
    if (wordsArray.length > 0 && letterClasses.length === 0) {
      const initialLetterClasses = wordsArray.map((myWord) =>
        myWord.split('').map(() => 'default')
      );
      setLetterClasses(initialLetterClasses);
    }
  }, [wordsArray, letterClasses]);

  const handleChange = (event) => {
    if (event.target.value.endsWith(' ')) {
      setUserInput('');
      setDummy(wordsArray[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    } else {
      setUserInput(event.target.value);
    }
    handleColor(event);
  };

  const handleColor = () => {
    if (currentIndex >= wordsArray.length) {
      return; // Check for a valid currentIndex
    }

    const actualWord = wordsArray[currentIndex];
    const userWord = userInput;

    // Clone the current state of letterClasses to avoid mutating it
    const updatedLetterClasses = [...letterClasses];

    for (let i = 0; i < userWord.length; i++) {
      if (userWord[i] === actualWord[i]) {
        updatedLetterClasses[currentIndex][i] = 'correct';
      } else {
        updatedLetterClasses[currentIndex][i] = 'incorrect';
      }
    }
    setLetterClasses(updatedLetterClasses);

    if (userWord.length > dummy.length-1) {
      const newActualWord = dummy + userWord.substring(dummy.length);
      const newWordsArray = [...wordsArray];
      newWordsArray[currentIndex] = newActualWord;
  
      const updatedLetterClasses = [...letterClasses];
  
      for (let i = dummy.length; i < userWord.length; i++) {
          updatedLetterClasses[currentIndex][i] = 'incorrect';
      }
  
      setWordsArray(newWordsArray);
      setLetterClasses(updatedLetterClasses);
    }
    
  };
  console.log(letterClasses)

  return (
    <div className='container' style={{ position: 'relative' ,width: '60%'}}>
        <div className='para' style={{ position: 'absolute' }}>
            {wordsArray.map((myWord, myWordIndex) => (
            <span key={myWordIndex}>
                {myWord.split('').map((myLetter, myLetterIndex) => (
                <span key={myLetterIndex} className={letterClasses[myWordIndex]?.[myLetterIndex] || 'default'}>
                    {myLetter}
                </span>
                ))}
                {myWordIndex !== wordsArray.length - 1 && ' '}
            </span> 
            ))}
        </div>
      <input
        type='text'
        value={userInput}
        onChange={handleChange}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0, // Hide the input field
          }}
      />
    </div>
  );
}

export default Words;



