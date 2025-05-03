import React, { useState } from "react";
import { CounterContext } from "../CounterContext";
export default function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <CounterContext.Provider value={{ counter, increaseCounter }}>
      {children}
    </CounterContext.Provider>
  );
}
