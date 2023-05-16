import React, {useState} from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from '../Data';

const Charts = () => {
    
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Profit",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

  return (
    <>
    <div className='m-3 mx-12'></div>
    <div className='bg-teal-50 rounded-3xl p-4 text-gray-700 shadow-lg'>
    <Line data={userData} />
     </div>   
    </>
  )
}

export default Charts