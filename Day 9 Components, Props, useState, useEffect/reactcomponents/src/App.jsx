import { FooterV2 } from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import MovieCard from "./components/MovieCard.jsx";
import Counter from "./components/Counter.jsx";
function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {/*<ABCD />
      <Main />
      <Footer /> 

        <MovieCard
          movieName="Harry Potter"
          poster="https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_.jpg"
        />
        <MovieCard
          movieName="Transformers"
          poster="https://m.media-amazon.com/images/I/61MjSx1VBBL.jpg"
        />

        <MovieCard />
        */}
        <Counter />
      </div>
    </div>
  );
}

export default App;
