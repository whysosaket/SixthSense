import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import LastInvestments from "../components/LastInvestments";
import Charts from "../components/Charts";
import Toggle from "../components/Toggle";
import WarningNotes from "../components/WarningNotes";

const Home = () => {
  return (
    <>
        <div className="flex justify-between">
            <div className=" w-1/4">
            <ProfileCard />
            <LastInvestments />
            <WarningNotes />
            <Toggle />
            </div>
            <div className=" w-3/4">
                <Charts />
            </div>
        </div>
    
    </>
  );
};

export default Home;
