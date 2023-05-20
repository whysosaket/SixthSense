import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import LastInvestments from "../components/LastInvestments";
import Charts from "../components/Charts";
import Toggle from "../components/Toggle";
import IndexDetails from "../components/IndexDetails";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";
import { motion } from "framer-motion";

const Home = () => {

  const context = useContext(GlobalContext);
  const {getData, getTransactions, trade} = context;

  const per = async () => {
    await getData();
    await getTransactions();
    await trade();
  }

  useEffect(() => { 
    setInterval(() => {
      getData();
      getTransactions();
    }, 2000);

    return () => {
      clearInterval();
    }
  }, []);
  
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
            <Toggle />
            </div>
            <div className="w-full md:w-3/4 mb-4">
                <Charts />
            </div>
        </div>
    
    </>
  );
};

export default Home;
