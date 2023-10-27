import React, { createContext, useContext, useState } from 'react';

const ParaContext = createContext();

export function usePara() {
  return useContext(ParaContext);
}

export function ParaProvider({ children }) {
  const [paragraph, setPara] = useState("I am become death destroyer of the world");

  const updatePara = (newPara) => {
    setPara(newPara);
  };

  return (
    <ParaContext.Provider value={{ paragraph, updatePara }}>
      {children}
    </ParaContext.Provider>
  );
}
