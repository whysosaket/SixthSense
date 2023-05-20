import React, {useState} from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS} from "chart.js/auto";
import { UserData } from '../Data';

const Charts = () => {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
    
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Investment Value",
            data: UserData.map((data) => data.userGain),
            fill: true,
            borderColor: "#2dd4bf",
            borderWidth: 6,
            backgroundColor: "#2dd4bf",
            pointBorderColor: "#f26c6d",
            pointBorderWidth: 3,
            pointRadius: 0,
            pointBackgroundColor: "#fff",
          },
        ],
      });

  return (
    <>
    <div className='m-3 mx-12'></div>
    <div className='bg-gray-50 opacity-75 rounded-3xl p-4 text-gray-700 shadow-lg'>
    <Line data={userData} options={options} />
     </div>   
    </>
  )
}

export default Charts