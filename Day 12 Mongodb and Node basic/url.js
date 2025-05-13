import url from "url";

let myurl = "https://www.w3schools.com/js/js_comments.asp";

let parsedUrl = url.parse(myurl);
console.log(parsedUrl);

console.log(parsedUrl.hostname);
