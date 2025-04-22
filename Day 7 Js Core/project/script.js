function renderMoviesonScreen(movies) {
  document.getElementById("all-movies").innerHTML = "";
  for (item of movies) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    h3.innerText = item["Title"];
    img.src = item["Poster"];
    img.width = 200;
    div.appendChild(img);
    div.appendChild(h3);
    document.getElementById("all-movies").appendChild(div);
  }
}
function fetchMovies(name = "Harry Potter") {
  fetch(`http://www.omdbapi.com/?apikey=f9033177&s=${name}`)
    .then((res) => res.json())
    .then((data) => {
      let movies = data["Search"];
      console.log(movies);
      renderMoviesonScreen(movies);
    })
    .catch((err) => {
      console.log("Error", err);
    });
}

document.getElementById("movies").addEventListener("click", () => {
  let value = document.getElementById("search").value;
  fetchMovies(value);
});
