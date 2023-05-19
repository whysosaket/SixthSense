import React, {useContext} from 'react'
import {GrFormNext} from 'react-icons/gr'
import GlobalContext from "../context/globalContext";

const IndexDetails= () => {

  const context = useContext(GlobalContext);
  const {data} = context;

  return (
    <>
    <div className="mx-3 my-6">
        <div className="bg-white rounded-3xl p-4 text-gray-700 shadow-lg">
            <div className='flex justify-between mb-2'>
                <p className='font-bold'>Index Details</p>
                <p className='text-lg text-gray-200 my-auto hover:animate-bounce'><GrFormNext /></p>
            </div>

            <div className=''>
            <div className='flex justify-start my-1'>
                <p className='text-gray-400'><span className='text-red-400 font-semibold text-sm'> Total Shares<sup>1</sup></span>: {data.totalShares}</p>
            </div>
            <div className='flex justify-start my-1'>
                <p className='text-gray-400'><span className='text-red-400 font-semibold text-sm'> Price Per Share<sup>2</sup></span>: ₹ {data.pricePerShare.toFixed(2)}</p>
            </div>
            <div className='flex justify-start my-1'>
                <p className='text-gray-400'><span className='text-red-400 font-semibold text-sm'> Invested<sup>3</sup></span>: ₹ {data.principle.toFixed(2)}</p>
            </div>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default IndexDetails