import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import LastInvestments from "../components/LastInvestments";
import Charts from "../components/Charts";
import Toggle from "../components/Toggle";
import IndexDetails from "../components/IndexDetails";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";

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
            <ProfileCard />
            <LastInvestments />
            <IndexDetails />
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
