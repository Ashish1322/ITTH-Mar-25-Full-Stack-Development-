function fetchMovies() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("Data from API", data);
    })
    .catch((err) => {
      console.log("somethig went wrong on API Call");
    });
}

async function fetchMovies2() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    console.log("Data from API", data);
  } catch (err) {
    console.log("Something went wrong while calling an API");
  }
}
fetchMovies();
fetchMovies2();
