import React from 'react'
import {GrFormNext} from 'react-icons/gr'

const LastInvestments = () => {
  return (
    <>
    <div className="mx-3 my-6">
        <div className="bg-white rounded-3xl p-4 text-gray-700 shadow-lg">
            <div className='flex justify-between mb-2'>
                <p className='font-bold'>Last investments</p>
                <p className='text-lg text-gray-200 my-auto hover:animate-bounce'><GrFormNext /></p>
            </div>

            <div className=''>
            <div className='flex justify-between my-1'>
                <p className='text-gray-400 font-semibold text-sm my-auto'>22/01/2015</p>
                <p className='text-green-400'>+$412</p>
                <p className='text-green-400'>$1412</p>
            </div>
            <div className='flex justify-between my-1'>
                <p className='text-gray-400 font-semibold text-sm my-auto'>23/01/2015</p>
                <p className='text-green-400'>+$12</p>
                <p className='text-green-400'>$1424</p>
            </div>
            <div className='flex justify-between my-1'>
                <p className='text-gray-400 font-semibold text-sm my-auto'>24/01/2015</p>
                <p className='text-red-400'>-$200</p>
                <p className='text-green-400'>$1224</p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LastInvestments