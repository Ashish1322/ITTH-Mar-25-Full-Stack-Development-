import { useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";
import Child from "./components/Child";
function App() {
  const [counter, setCounter] = useState(0);

  const doingSomeHeavyComputation = () => {
    console.log("doing heavy calculatoin");
    return 20;
  };

  // useEffect(() => {
  //   let reuslt = doingSomeHeavyComputation();
  // }, []);

  const data = useMemo(() => {
    let reuslt = doingSomeHeavyComputation();
    return reuslt;
  }, []);

  const sayHello = useCallback(() => {
    return () => {
      alert("HI");
    };
  }, []);

  return (
    <div>
      <h1>counter {counter}</h1>
      <h1>Heavy Calucaliton result: {data}</h1>
      <Child sayHello={sayHello} />
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
    </div>
  );
}

export default App;
