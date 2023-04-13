const http = require("http");
const server = http.createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

let count = 0;

io.on("connection", (socket) => {
  console.log("A user has connected");

  count++;

  io.emit("count", count);

  socket.on("disconnect", () => {
    console.log("A user has disconnected");

    count--;

    io.emit("count", count);
  });
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});