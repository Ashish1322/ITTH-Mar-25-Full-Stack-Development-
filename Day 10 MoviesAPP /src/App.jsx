import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MoviesProvider from "./context/providers/MoviesProvider";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <div>
      <MoviesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/details/:movieId" element={<MovieDetail />} />
        </Routes>
      </MoviesProvider>
    </div>
  );
}

export default App;
