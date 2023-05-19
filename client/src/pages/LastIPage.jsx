import React from 'react'
import {useContext, useEffect} from 'react'
import GlobalContext from "../context/globalContext";

const LastIPage = () => {
    const context = useContext(GlobalContext);
    const {transactions, getTransactions} = context;

    useEffect(() => {
        getTransactions();
    }, []);

  return (
    <>
    <div className=''>
    <div className="mx-3 my-6">
        <div className="bg-white rounded-3xl p-4 text-gray-700 shadow-lg">
            <div className='flex justify-between mb-2'>
                <p className='font-bold'>Last investments</p>
                {/* <Link to="/lastinvestments" className='text-lg text-gray-200 my-auto hover:animate-bounce'><GrFormNext /></Link> */}
            </div>

            <div className=''>
                {transactions.map((transaction, index) => {
                    return (
                        <div key={index} className='flex justify-between my-1'>
                            <p className='text-gray-400 font-semibold text-sm my-auto'>{transaction.transactionOn}</p>
                            <p className={`text-green-400 ${transaction.type=="sell"&&'text-red-400'}`}>{transaction.amount}</p>
                            <p className={`text-green-400 ${transaction.type=="sell"&&'text-red-400'}`}>₹ {transaction.price.toFixed(2)}</p>
                        </div>
                    )
                })}
            {/* <div className='flex justify-between my-1'>
                <p className='text-gray-400 font-semibold text-sm my-auto'>22/01/2015</p>
                <p className='text-green-400'>+$412</p>
                <p className='text-green-400'>$1412</p>
            </div> */}
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default LastIPage