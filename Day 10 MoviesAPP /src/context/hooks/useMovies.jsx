import { useContext } from "react";
import { MoviesContext } from "../MovieContext";
export default function useMovies() {
  return useContext(MoviesContext);
}
