import React, { useState, useEffect } from 'react';
import '../styles/Words.css';
import { usePara } from '../utils/ParaContext';


function Words({setCorrectWords}) {
  const {paragraph} = usePara();

  const [para, setPara] = useState("");
  const [userInput, setUserInput] = useState("");
  const [wordsArray, setWordsArray] = useState(para.split(' '));
  const [currentIndex, setCurrentIndex] = useState();
  const [letterClasses, setLetterClasses] = useState([]);
  const [dummy, setDummy] = useState(wordsArray[currentIndex]);

  useEffect(() => {
    setPara(paragraph);
  }, [paragraph]);

  useEffect(() => {
    setDummy(wordsArray[currentIndex]);
    setWordsArray(paragraph.split(' '));
    setLetterClasses([]);
    setCurrentIndex(0);
  }, [para]);
  

  useEffect(() => {
    if (wordsArray.length > 0 && letterClasses.length === 0) {
      const initialLetterClasses = wordsArray.map((myWord) =>
        myWord.split('').map(() => 'default')
      );
      setLetterClasses(initialLetterClasses);
    }
  }, [wordsArray, letterClasses]);

  console.log(wordsArray);

  const handleChange = (event) => {
    if (event.target.value.endsWith(' ')) {
      setUserInput('');
      setDummy(wordsArray[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);

      // Remove leading and trailing spaces from userInput and compare it to the current word
      const wordy = userInput.substring();
      if (wordy.trim() === wordsArray[currentIndex]) {
        setCorrectWords((prev) => prev+1);
      }

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

  //handling reset
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        // Reset the state when the "Escape" key is pressed
        setPara(paragraph);
        setWordsArray(para.split(" "));
        setCurrentIndex(0);
        setLetterClasses([]);
        setDummy(wordsArray[currentIndex]);
        setUserInput('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [para, wordsArray, currentIndex, letterClasses, dummy]);


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
            opacity: 0,// Hide the input field
            width:'60%',
            height:'30%',
          }}
      />
    </div>
  );
}

export default Words;



