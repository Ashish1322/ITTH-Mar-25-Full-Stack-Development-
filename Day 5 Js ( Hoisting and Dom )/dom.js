var myparagraph = document.getElementById("firstp");
myparagraph.innerText = "Testing";

var secondp = document.getElementById("seconp");
secondp.innerText = "Testing 2";
secondp.style = "color:red; text-align: center";

function changeImage() {
  var img = document.getElementById("football");
  img.src =
    "https://cdn.britannica.com/69/228369-050-0B18A1F6/Asian-Cup-Final-2019-Hasan-Al-Haydos-Qatar-Japan-Takumi-Minamino.jpg";
}

function changeFontFamily() {
  var paragraphs = document.getElementsByTagName("p");
  for (let item of paragraphs) {
    item.style = "font-family: cursive";
  }
}
// setTimeout(changeImage, 2000);
setTimeout(changeFontFamily, 3000);

// Listeners
document.getElementById("btn").addEventListener("click", changeImage);
