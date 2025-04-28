import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  /*
  Rules of JSX:
  1. class : className
  2. {} : write js
  3. Only a single child you can return otherwise combine them with a div
  4.  Inline : CSS properties are in camel Case

  */
  return (
    <div>
      <div>
        <h1 style={{ fontSize: "20px", textAlign: "center" }}>HI {count} </h1>
        <button>Download</button>
      </div>
      <img src="" />

      <h1>Hello</h1>
    </div>
  );
}

export default App;
