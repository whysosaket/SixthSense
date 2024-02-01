const express = require("express");
const cors = require("cors");
const connectDB = require("./database");
const http = require("http");
const { Server } = require("socket.io");
const configureSockets = require("./socketFunctions");


// connecting to database
connectDB();

// setting up express server
const app = express();
let port = process.env.PORT;
if (port == null || "") {
  port = 9000;
}

app.use(cors());
app.use(express.json());

// create server
const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "*",
//   },
// });

// Configure sockets
// configureSockets(io);

// Available Routes
app.use("/api/trade", require("./routes/trade"));
app.use("/api/adduser", require("./routes/adduser"));
app.use("/api/socket", require("./routes/socketReplacement"));

server.listen(port, () => {
  console.log("Server started at port: " + port);
});

// io.listen(9001, () => {
//   console.log("Socket listening on port 9001");
// });
