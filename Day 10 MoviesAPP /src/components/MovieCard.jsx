import React from "react";

export default function MovieCard({ poster, title, year }) {
  return (
    <div className="card">
      <img src={poster} />
      <h3>{title}</h3>
      <p>Released : {year}</p>
    </div>
  );
}
