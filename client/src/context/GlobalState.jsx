import React, { useEffect, useState } from "react";
import GlobalContext from "./globalContext";

let url = "http://192.168.29.74:9000";

const GlobalState = (props) => {

    const [data, setData] = useState({walletBalance: 0, date: "09/01/2021", totalAssets: 0, totalShares: 0, pricePerShare: 0, principle: 0});
    const [transactions, setTransactions] = useState([{transactionOn: "09/01/2021", amount: 0, price: 0, type: "buy"}, {transactionOn: "09/01/2021", amount: 0, price: 0, type: "buy"}, {transactionOn: "09/01/2021", amount: 0, price: 0, type: "buy"},{transactionOn: "09/01/2021", amount: 0, price: 0, type: "buy"} ]);
    const [graph, setGraph] = useState([]);

    useEffect (()=>{
        getGraph();

    },[])

    const getData = async () => {
        try{
            let response = await fetch(`${url}/api/trade/getdata`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            response = await response.json();
            setData(response.data);
        }catch(e){
            console.log(e);
        }
    }

    const getTransactions = async () => {
        try{
            let response = await fetch(`${url}/api/trade/transactions`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            response = await response.json();
            setTransactions(response.transactions);
        }catch(e){
            console.log(e);
        }
    }

    const getGraph = async () => {
        try{
            let response = await fetch(`${url}/api/trade/getgraph`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            response = await response.json();
            setGraph(response.graph);
        }catch(e){
            console.log(e);
        }
    }

    const trade = async () => {
        try{
            let response = await fetch(`${url}/api/trade`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            response = await response.json();
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }

    const reset = async () => {
        try{
            let response = await fetch(`${url}/api/trade/reset`);
            response = await response.json();
            console.log(response);
        }catch(e){
            console.log(e);
        }
    }

  return (
    <GlobalContext.Provider value={{ data, transactions, getData, getTransactions, trade, reset, getGraph, graph }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;