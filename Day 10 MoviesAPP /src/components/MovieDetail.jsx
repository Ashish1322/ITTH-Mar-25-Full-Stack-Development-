import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function MovieDetail() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  const fetchMovieDetail = () => {
    fetch(`http://www.omdbapi.com/?apikey=f9033177&i=${movieId}`)
      .then((res) => {
        let data = res.json();
        return data;
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((errr) => {
        alert("Error occred while fetching movies");
        console.log(errr);
      });
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return (
    <div>
      {movie == null ? (
        <h1>Please Wait while we are loading </h1>
      ) : (
        <div>
          {" "}
          <img src={movie.Poster} />
          <p>Actors: {movie.Actors}</p>
          <p>Awards: {movie.Awards}</p>
          <p>Gener: {movie.Genre}</p>
        </div>
      )}
    </div>
  );
}
