import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let intervalId = null;
let speed = 1500;

const SimulateButtons = () => {
  const [isAuto, setIsAuto] = useState(false);
  const context = useContext(GlobalContext);
  const { trade, reset } = context;
  const notify = (data) => {
    toast.success(data, { theme: "dark" });
  };

  const handleIsAuto = () => {
    if (isAuto) {
      clearInterval(intervalId);
    } else {

      intervalId = setInterval(() => {
        trade();
      }, speed);


      notify("Auto Day is Active with speed " + speed + "ms");
    }
    setIsAuto(!isAuto);
  };

  const handleReset = () => {
    reset();
    notify("Reset Successful");
  };


  return (
    <>
      <ToastContainer autoClose={1000} />
      <button className="bg-green-600 hover:bg-green-800 rounded-lg shadow-md text-white font-semibold px-4 py-3" onClick={handleIsAuto}>
        {isAuto ? "Pause Simulation" : "Start Simulation"}
      </button>
      <button className="bg-red-600 hover:bg-red-800 rounded-lg shadow-md text-white font-semibold px-4 py-3 ml-4" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default SimulateButtons;
