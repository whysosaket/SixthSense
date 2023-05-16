import React from 'react'
import {GrFormNext} from 'react-icons/gr'

const WarningNotes= () => {
  return (
    <>
    <div className="mx-3 my-6">
        <div className="bg-white rounded-3xl p-4 text-gray-700 shadow-lg">
            <div className='flex justify-between mb-2'>
                <p className='font-bold'>Recent Warnings</p>
                <p className='text-lg text-gray-200 my-auto hover:animate-bounce'><GrFormNext /></p>
            </div>

            <div className=''>
            <div className='flex justify-start my-1'>
                <p className='text-gray-400'><span className='text-red-400 font-semibold text-sm'> SuFaW<sup>1</sup></span>: A sudden fall in the indexes of Sensex is observed might reflect here</p>
            </div>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default WarningNotes