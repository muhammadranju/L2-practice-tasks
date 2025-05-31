const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World</h1>");
  } else if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello Home </h1>");
  } else if (req.url === "/bye") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Goodbye World</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
