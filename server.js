const http = require("http");

const server = http.createServer((req, res) => {
	if(req.url === "/health"){
		res.writeHead(200, {"Text-Content": "application/json"});
		res.end(JSON.stringify({status:"ok"}));
		return;
	}

	res.writeHead(200, {"Text-Content": "text/plain"});
	res.end("Hello, DevOps beginner");
});

server.listen(3000, "0.0.0.0", () => {
	console.log("server running on http://localhost:3000");
});