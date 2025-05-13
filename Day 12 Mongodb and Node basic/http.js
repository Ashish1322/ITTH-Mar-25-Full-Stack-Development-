import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  // 1. Read the req url
  let reqFileName = path.basename(req.url);

  // read the file index.html
  if (reqFileName.length == 0) {
    reqFileName = "index.html";
  }
  console.log(reqFileName);
  fs.readFile(`project/${reqFileName}`, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.write("404 File not Found");
    } else {
      res.write(data.toString());
    }
    res.end();
  });
});

server.listen(8001);
