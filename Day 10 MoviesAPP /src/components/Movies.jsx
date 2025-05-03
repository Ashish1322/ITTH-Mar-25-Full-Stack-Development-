import React, { useEffect } from "react";
import useMovies from "../context/hooks/useMovies";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
export default function Movies() {
  const { fetchMovies, movies } = useMovies();

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movies">
      {movies.map((item, index) => {
        return (
          <Link to={`/movie/details/${item.imdbID}`}>
            <MovieCard
              title={item.Title}
              poster={item.Poster}
              year={item.Year}
            />
          </Link>
        );
      })}
    </div>
  );
}
