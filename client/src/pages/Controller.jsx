import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let intervalId = null;
let speed = 1000;

const Controller = () => {
  const [isAuto, setIsAuto] = useState(false);
  const context = useContext(GlobalContext);
  const { trade, data, getData, reset, getGraph } = context;
  const speedRef = useRef(null);

  const notify = (data) => {
    toast.success(data, { theme: "dark" });
  };

  const handleIsAuto = () => {
    if (isAuto) {
      clearInterval(intervalId);
    } else {


      clearInterval(intervalId);
      if (speedRef.current.value < 1000) {
        speed = 1000;
      } else {
        speed = speedRef.current.value;
      }


      intervalId = setInterval(() => {
        trade();
        // getGraph();
      }, speed);


      notify("Auto Day is Active with speed " + speed + "ms");
    }
    setIsAuto(!isAuto);
  };

  const handleReset = () => {
    reset();
    notify("Reset Successful");
  };

  useEffect(() => {
    // getData();
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, [data]);

  return (
    <>
      <ToastContainer autoClose={1000} />
      <div className="mx-auto">
        <h1 className="text-3xl font-semibold text-center my-2 dark:text-white">CONTROLLER</h1>
        <div className="flex justify-center flex-col">
          <h3 className="mx-auto my-4 text-2xl font-semibold dark:text-white">{data.date}</h3>
          <button
            onClick={handleReset}
            className="bg-red-500 my-2 hover:bg-red-700 text-white mx-auto font-bold py-2 px-4 rounded-lg md:w-1/12 w-2/6"
          >
            Reset
          </button>
          {!isAuto && (
            <input
              type="number"
              className="mx-auto my-2 border-2 p-2"
              placeholder="speed in ms"
              ref={speedRef}
            />
          )}
          <button
            onClick={handleIsAuto}
            className="bg-blue-500 my-2 hover:bg-blue-700 text-white mx-auto font-bold py-2 px-4 rounded-lg md:w-1/12 w-2/6"
          >
            AutoDay
          </button>
        </div>
        {isAuto && (
          <div className="">
            <h1 className="text-red-500 font-semibold text-center">
              Auto Day is Active (speed: {speed}ms)
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Controller;
