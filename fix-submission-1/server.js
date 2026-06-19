const http = require("http");

const PORT = process.env.PORT || 3000;
const APP_MESSAGE = process.env.APP_MESSAGE || "Hello DevOps Beginner";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        status: "ok",
        app: "fix-submission-1",
      })
    );
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(APP_MESSAGE);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
