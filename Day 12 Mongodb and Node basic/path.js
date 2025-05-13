import path from "path";

var a = "src";
var b = "components";
var c = "App.jsx";

var mainPath = path.join(a, b, c);
console.log(mainPath);
console.log(path.delimiter);

var folder = "tmp/runtime/files/play.js";
console.log(path.dirname(folder), path.basename(folder));
console.log(path.extname(folder));
