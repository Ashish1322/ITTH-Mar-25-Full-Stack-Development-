import React, { useState } from "react";
import { MoviesContext } from "../MovieContext";

export default function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = (movieName = "Transformers") => {
    fetch(`http://www.omdbapi.com/?apikey=f9033177&s=${movieName}`)
      .then((res) => {
        let data = res.json();
        return data;
      })
      .then((data) => {
        setMovies(data?.Search);
      })
      .catch((errr) => {
        alert("Error occred while fetching movies");
        console.log(errr);
      });
  };

  return (
    <MoviesContext.Provider value={{ movies, fetchMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}
