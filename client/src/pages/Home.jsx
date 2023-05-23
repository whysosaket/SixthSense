import React from "react";
import ProfileCard from "../components/ProfileCard";
import LastInvestments from "../components/LastInvestments";
import Charts from "../components/Charts";
import IndexDetails from "../components/IndexDetails";
import { motion } from "framer-motion";

const Home = () => {


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
        </div>
    
    </>
  );
};

export default Home;
