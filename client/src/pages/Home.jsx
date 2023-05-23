import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import LastInvestments from "../components/LastInvestments";
import Charts from "../components/Charts";
import Toggle from "../components/Toggle";
import IndexDetails from "../components/IndexDetails";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";
import { motion } from "framer-motion";
import io from "socket.io-client";

let url = "http://192.168.29.74:9000";
const socket = io.connect("http://192.168.29.74:9001");

const Home = () => {

  const context = useContext(GlobalContext);
  const {getData, getTransactions, trade, getAllData, setData, setGraph, setTransactions} = context;
  const ref = useRef(null);

  const per = async () => {
    getAllData();
  }

  useEffect(() => {
    per();
  }, []);

  // useEffect(() => { 
  //   // setInterval(() => {
  //   //   getData();
  //   //   getTransactions();
  //   // }, 2000);

  //   // getData();
  //   // getTransactions();

  //   return () => {
  //     clearInterval();
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect");
  //   socket.on("profileData", (data) => {
  //       console.log("profileData");
  //       setData(data);
  //       }
  //   );
  //   socket.on("transactions", (data) => {
  //       console.log("transactions");
  //       setTransactions(data);
  //       }
  //   );
  //   socket.on("graph", (data) => {
  //     console.log("graph");
  //       setGraph(data);
  //       }
  //   );
  // }, [socket]);

  const handleSend = async () => {
    getAllData(ref.current.value);
  }
  
  return (
    <>
        <div className="flex justify-between flex-col md:flex-row">
            <div className="w-full flex flex-col md:w-1/4">
              <motion.div animate={{ x: [-150,0] }} transition={{ duration: 0.8 }}>
            <ProfileCard />
            </motion.div>
            <motion.div animate={{ x: [150,0] }} transition={{ duration: 0.7 }}>
            <LastInvestments />
            </motion.div>
            <motion.div animate={{ y: [150,0] }} transition={{ duration: 0.8 }}>
            <IndexDetails />
            </motion.div>
            {/* <Toggle /> */}
            </div>
            <div className="w-full md:w-3/4 mb-4">
                <Charts />
            </div>
            {/* <div className="w-full md:w-3/4 mb-4">
                <input className="w-full md:w-3/4 mb-4" ref={ref} />
                <button onClick={handleSend} className="bg-white rounded-lg p-2 mx-2">Click</button>
              </div> */}
        </div>
    
    </>
  );
};

export default Home;
