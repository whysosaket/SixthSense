import { useContext, useState } from 'react';
import GlobalContext from '../context/globalContext';
import { motion } from "framer-motion"
import AnimatedNumber from "animated-number-react";

let duration = 700;
let formatValue = value => `₹ ${Number(value).toFixed(2)}`;

const ProfileCard = () => {

    const context = useContext(GlobalContext);
    const { data } = context;



  return (
    <>
        <>
        <div className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-300 via-purple-300 to-indigo-400 rounded-3xl p-4 shadow-2xl text-white m-3">
            <div className='flex justify-between my-1'>
                <p className="text-md font-semibold text-gray-200">Current Balance</p>
                <p className="text-md font-semibold">{data.date}</p>
            </div>
            <div className='mb-12'>
           
                <h1 className="text-3xl font-extrabold"> 
                <AnimatedNumber
            value={data.walletBalance.toFixed(2)}
            formatValue={formatValue}
            duration={duration}
            />
                </h1>
            </div>
            <div className='flex justify-between my-1'>
                <p className="text-lg text-gray-200">**** 5678</p>
                <div className='h-8 flex'>
                    <div className='rounded-full bg-white h-8 w-8 flex justify-center items-center opacity-70 translate-x-3'>
                    </div>
                    <div className='rounded-full bg-white h-8 w-8 flex justify-center items-center opacity-40'>
                    </div>
                </div>
            </div>
        </div>
        </>

    </>
  )
}

export default ProfileCard