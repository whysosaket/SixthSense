import React, { useEffect, useState } from "react";
import GlobalContext from "./globalContext";
import io from "socket.io-client";

let url = "http://192.168.29.74:9000";
const socket = io.connect("http://192.168.29.74:9001");

const GlobalState = (props) => {
  const [data, setData] = useState({
    walletBalance: 0,
    date: "09/01/2021",
    totalAssets: 0,
    totalShares: 0,
    pricePerShare: 0,
    principle: 0,
    profit: 0,
    profitSIP: 0,
    SIP: 0,
    profitPercent: 0,
  });
  const [transactions, setTransactions] = useState([
    { transactionOn: "09/01/2021", amount: 0, price: 0, type: "buy" },
    { transactionOn: "09/01/2021", amount: 0, price: 0, type: "buy" },
    { transactionOn: "09/01/2021", amount: 0, price: 0, type: "buy" },
    { transactionOn: "09/01/2021", amount: 0, price: 0, type: "buy" },
  ]);
  const [graph, setGraph] = useState([]);

  useEffect(() => {
    setTimeout(()=>{
      getData();
      getTransactions();
      getGraph();
    },1300)
   
    socket.on("profileData", (data) => {
        setData(data);
        }
    );
    socket.on("transactions", (data) => {
        setTransactions(data);
        }
    );
    socket.on("graph", (data) => {
        setGraph(data);
        }
    );
  }, [socket]);

  const getAllData = () => {
    console.log("sending message");
    socket.emit("getProfileData", "send me data");
    socket.emit("getTransactions", "send me data");
    socket.emit("getGraph", "send me data");
    };

  const getData = async () => {
    try {
      let response = await fetch(`${url}/api/trade/getdata`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTransactions = async () => {
    try {
      let response = await fetch(`${url}/api/trade/transactions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setTransactions(response.transactions);
    } catch (e) {
      console.log(e);
    }
  };

  const getGraph = async () => {
    try {
      let response = await fetch(`${url}/api/trade/getgraph`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setGraph(response.graph);
    } catch (e) {
      console.log(e);
    }
  };

  const trade = async () => {
    try {
      let response = await fetch(`${url}/api/trade`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const reset = async () => {
    try {
      let response = await fetch(`${url}/api/trade/reset`);
      response = await response.json();
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        transactions,
        getData,
        getTransactions,
        trade,
        reset,
        getGraph,
        graph,
        getAllData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
