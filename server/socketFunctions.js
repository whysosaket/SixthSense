const { sgetGraph, sgetTransactions, sgetProfileData } = require("./controller/socketController");

const configureSockets = (io) => {
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
    });

    socket.on("getTransactions", async () => {
      let transactions = await sgetTransactions();
      socket.broadcast.emit("transactions", transactions);
    });

    socket.on("getProfileData", async () => {
      let profileData = await sgetProfileData();
      socket.broadcast.emit("profileData", profileData);
    });
  });
};

module.exports = configureSockets;
