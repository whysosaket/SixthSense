import React, { useState } from "react";
import GlobalContext from "./globalContext";

const GlobalState = (props) => {

    const [data, setData] = useState({walletBalance: 0, date: "09/01/2021", totalAssets: 0, totalShares: 0, pricePerShare: 0, principle: 0});
    const [transactions, setTransactions] = useState([]);


    const getData = async () => {
        try{
            let response = await fetch("http://192.168.29.74:9000/api/trade/getdata", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            response = await response.json();
            console.log(response);
            setData(response.data);
        }catch(e){
            console.log(e);
        }
    }

    const getTransactions = async () => {
        try{
            let response = await fetch("http://192.168.29.74:9000/api/trade/transactions", {
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

  return (
    <GlobalContext.Provider value={{ data, transactions, getData, getTransactions }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;