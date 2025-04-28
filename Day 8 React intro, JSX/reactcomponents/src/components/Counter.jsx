import { useState, useEffect } from "react";

export default function Counter() {
  // it's a norma variable let's try to conver this to a state
  //   var counter = 0;

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  let increaseCount = () => {
    // counter += 1;
    setCounter(counter + 1);
  };

  let increaseCount2 = () => {
    // counter2 += 1;
    setCounter2(counter2 + 1);
  };

  useEffect(() => {
    console.log("Counter State", counter);
  }, []);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <h1>Counter2 : {counter2}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={increaseCount2}>Increase Count 2</button>
    </div>
  );
}
