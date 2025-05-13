// modular
// const fs = require("fs");
// ES6
import fs from "fs";

// C
fs.writeFile("temp.json", "Hello", (err) => {
  console.log(err);
});

// R
fs.readFile("commands.txt", (err, data) => {
  console.log(data.toString());
});

// D
fs.unlink("temp.txt", (err) => {
  if (err) {
    console.log("Unable to delete the file", err);
  } else {
    console.log("File deleted");
  }
});

fs.mkdir("commands", (err) => {
  if (!err) {
    console.log("Folder has been created");
  }
});

fs.rmdir("commands", (err) => {
  if (!err) {
    console.log("Folder has been Deleted");
  }
});
