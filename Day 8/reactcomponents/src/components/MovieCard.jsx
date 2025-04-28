import "../css/moviecard.css";

function MovieCard({ movieName, poster }) {
  return (
    <div className="card">
      <img className="img" src={poster} />
      <h1 className="heading">{movieName}</h1>
    </div>
  );
}

export default MovieCard;
