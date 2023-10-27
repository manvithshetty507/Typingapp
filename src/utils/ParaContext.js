import React, { createContext, useContext, useState } from 'react';

const ParaContext = createContext();

export function usePara() {
  return useContext(ParaContext);
}

export function ParaProvider({ children }) {
  const [paragraph, setPara] = useState("The brown fox jumped over the quick lazy dog in the rustic meadow under the bright sunshine.");

  const updatePara = (newPara) => {
    setPara(newPara);
  };

  return (
    <ParaContext.Provider value={{ paragraph, updatePara }}>
      {children}
    </ParaContext.Provider>
  );
}
