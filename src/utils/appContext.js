// import React, {createContext, useContext, useState} from 'react'

// const appContext = createContext();

// export function useAppContext() {
//     return useContext(appContext);
// }

// export function AppContextProvider({children}) {
//     const [para, setPara] = useState("I am become death destroyer of the world");
//     const [userInput, setUserInput] = useState("");
//     const [wordsArray, setWordsArray] = useState(para.split(" "));
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [letterClasses, setLetterClasses] = useState([]);
//     const [dummy, setDummy] = useState(wordsArray[currentIndex]);

//     const changeWordCount = (newPara) => {
//         setPara(newPara);
//         setWordsArray(newPara.split(' '));
//         setCurrentIndex(0);
//         setLetterClasses([]);
//         setUserInput('');
//         setDummy(newPara.split(' ')[0]);
//     }

//     return (
//         <appContext.Provider value={{ para, wordsArray, currentIndex, letterClasses, userInput, dummy }}>
//           {children}
//         </appContext.Provider>
//       );
// }