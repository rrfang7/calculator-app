import React, { useState } from 'react'
import { createContext } from 'react'

export const CalcContext = createContext();

function CalcProvider( { children }) {
    const [calc, setCalc] = useState({
        sign: "",
        number: 0,
        res: 0
    });

    const providerValue = { 
        calc, setCalc
    }

  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>    

  )
}

export default CalcProvider