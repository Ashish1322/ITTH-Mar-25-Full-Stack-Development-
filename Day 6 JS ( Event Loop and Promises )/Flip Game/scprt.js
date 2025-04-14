var images = [
  {
    src: "./img/1.png",
    visible: false,
    id: "1",
  },
  {
    src: "./img/5.png",
    visible: false,
    id: "5",
  },
  {
    src: "./img/3.png",
    visible: false,
    id: "3",
  },
  {
    src: "./img/11.png",
    visible: false,
    id: "11",
  },
  {
    src: "./img/5.png",
    visible: false,
    id: "5",
  },
  {
    src: "./img/1.png",
    visible: false,
    id: "1",
  },
  {
    src: "./img/7.png",
    visible: false,
    id: "7",
  },
  {
    src: "./img/9.png",
    visible: false,
    id: "9",
  },
  {
    src: "./img/3.png",
    visible: false,
    id: "3",
  },
  {
    src: "./img/11.png",
    visible: false,
    id: "11",
  },
  {
    src: "./img/7.png",
    visible: false,
    id: "7",
  },
  {
    src: "./img/9.png",
    visible: false,
    id: "9",
  },
];
var firstClickedImage = null;
var secondClickedImage = null;

function renderImagesOnScreen() {
  let board = document.getElementById("board");
  board.innerHTML = "";

  for (let index = 0; index < images.length; index += 1) {
    let currentCell = images[index];
    /*
    <div class="cell">
      <img src="./img/1.png">
    </div>
    */
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = currentCell["src"];
    if (currentCell["visible"] == false) {
      img.style = "visibility: hidden;";
    }
    div.appendChild(img);
    div.classList.add("cell");
    div.addEventListener("click", () => handleClickOnImage(index));
    board.appendChild(div);
  }
}

function checkIfImagesAreIdenticalOrNot() {
  if (images[firstClickedImage]["id"] != images[secondClickedImage]["id"]) {
    // Close both of them
    images[firstClickedImage]["visible"] = false;
    images[secondClickedImage]["visible"] = false;
    renderImagesOnScreen();
  }

  firstClickedImage = null;
  secondClickedImage = null;
}
function handleClickOnImage(index) {
  if (firstClickedImage == null) {
    firstClickedImage = index;
    images[index]["visible"] = true;
    renderImagesOnScreen();
  } else if (secondClickedImage == null) {
    secondClickedImage = index;
    images[index]["visible"] = true;
    renderImagesOnScreen();

    setTimeout(checkIfImagesAreIdenticalOrNot, 1000);
  }
}

// intial render
renderImagesOnScreen();
