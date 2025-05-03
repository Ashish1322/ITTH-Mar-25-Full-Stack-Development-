import React, { useState } from "react";
import useMovies from "../context/hooks/useMovies";

export default function Header() {
  const [movieName, setMovieName] = useState();
  const { fetchMovies } = useMovies();
  return (
    <div className="header">
      <div>
        <h3>TheaterBox</h3>
      </div>
      <div className="search">
        <input
          onChange={(e) => setMovieName(e.currentTarget.value)}
          type="text"
        />
        <button
          onClick={() => {
            fetchMovies(movieName);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
