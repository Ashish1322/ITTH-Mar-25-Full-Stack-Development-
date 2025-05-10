import "./App.css";
import { useState } from "react";
import { addContact } from "./redux/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/slices/moviesSlice";
function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { contacts } = useSelector((store) => store.contact);
  const { movies, loading } = useSelector((store) => store.movies);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contact Book</h1>
      <br />
      <input
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        placeholder="Enter Name"
      />
      <input
        onChange={(e) => setPhone(e.currentTarget.value)}
        type="text"
        placeholder="Enter Phonenumber"
      />
      <button
        onClick={() => {
          dispatch(addContact({ name, phone }));
        }}
      >
        Add Contact
      </button>
      <button onClick={() => dispatch(fetchMovies())}>
        {loading ? "Please Wait" : " Fetch Movies"}
      </button>
      <br />
      <hr />
      {contacts.map((item, index) => (
        <div>
          <h3>{item.name}</h3>
          <p>{item.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
