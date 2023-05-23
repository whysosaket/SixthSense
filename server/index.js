const express = require("express");
var cors = require("cors");
const connectDB = require("./database");
const http = require("http");
const { Server } = require("socket.io");
const {sgetGraph, sgetTransactions, sgetProfileData} = require("./controller/socketController");

// connecting to database
connectDB();

// setting up express server
const app = express();
let port = process.env.PORT;
if (port == null || "") {
  port = 9000;
}

app.use(cors());

// We use this middle ware to read request body params
app.use(express.json());

// create server
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("disconnect", () => {
    console.log("disconnected");
  });

  socket.on("message", (data) => {
    console.log(data);
  });

    socket.on("getGraph", async () => {
        let graph = await sgetGraph();
        socket.broadcast.emit("graph", graph);
        }
    );

    socket.on("getTransactions", async () => {
        let transactions = await sgetTransactions();
        socket.broadcast.emit("transactions", transactions);
        }
    );

    socket.on("getProfileData", async () => {
        let profileData = await sgetProfileData();
        socket.broadcast.emit("profileData", profileData);
        }
    );
});

// Avialable Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/link', require('./routes/link'));
app.use("/api/trade", require("./routes/trade"));
app.use("/api/adduser", require("./routes/adduser"));

app.listen(port, () => {
  console.log("Server started at port: " + port);
});

io.listen(9001, () => {
  console.log("Socket listening on port 9001");
});
