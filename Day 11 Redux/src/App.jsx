import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "./redux/slices/counterSlice";
function App() {
  const { counter } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count :{counter} </h1>
      <button onClick={() => dispatch(increaseCount({ name: "Asjhis" }))}>
        Increae Count
      </button>
    </div>
  );
}

export default App;
