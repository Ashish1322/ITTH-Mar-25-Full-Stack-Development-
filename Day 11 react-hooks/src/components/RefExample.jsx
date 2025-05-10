import "./App.css";
import { useRef } from "react";

function RefExample() {
  const fileRef = useRef();
  const inputRef = useRef();
  return (
    <div>
      <h1>React Hoooks</h1>
      <input ref={fileRef} style={{ display: "none" }} type="file" />
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          fileRef.current.click();
        }}
      >
        Uplaod File
      </button>
      <button
        onClick={() => {
          alert(inputRef.current.value);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
