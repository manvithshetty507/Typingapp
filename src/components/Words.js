import React, { useState, useEffect } from 'react';
import '../styles/Words.css';

function Words() {
  const [para, setPara] = useState("I am become death destroyer of the world");
  const [userInput, setUserInput] = useState("");
  const [wordsArray, setWordsArray] = useState(para.split(" "));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [letterClasses, setLetterClasses] = useState([]);

  useEffect(() => {
    if (wordsArray.length > 0) {
      // Initialize letterClasses for the entire paragraph
      const initialLetterClasses = wordsArray.map((myWord) =>
        myWord.split('').map(() => 'default')
      );
      setLetterClasses(initialLetterClasses);
    }
  }, [wordsArray]);

  const handleChange = (event) => {
    if (event.target.value.endsWith(' ')) {
      setUserInput('');
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
    // if (userWord.length > actualWord.length) {
    //     const newActualWord = actualWord + userWord.substring(actualWord.length);
    //     const newWordsArray = [...wordsArray]; // Clone the wordsArray
    //     newWordsArray[currentIndex] = newActualWord; // Update the specific index
    //     setWordsArray(newWordsArray); // Update the state with the new array

    //     let k = actualWord.length;
    //     while(k < userWord.length) {
    //         updatedLetterClasses[currentIndex][k] = 'incorrect';
    //         k++;
    //     }
    // }
    setLetterClasses(updatedLetterClasses);
  };

  console.log(wordsArray);

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



