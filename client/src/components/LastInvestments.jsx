import React, {useContext, useEffect} from 'react'
import {GrFormNext} from 'react-icons/gr'
import GlobalContext from "../context/globalContext";
import {Link} from 'react-router-dom';


const LastInvestments = () => {

    const context = useContext(GlobalContext);
    const {transactions, getTransactions} = context;

    useEffect(() => {
        // getTransactions();
    }, []);

  return (
    <>
    <div className="mx-3 my-2">
        <div className="bg-white dark:bg-dark3 dark:text-white dark:shadow-dark1 rounded-3xl p-4 text-gray-700 shadow-lg">
            <Link to="/lastinvestments"  className='flex justify-between mb-2'>
                <p className='font-bold'>Last investments</p>
                <p className='text-lg text-gray-200 my-auto hover:animate-pulse'>
                    <GrFormNext className='dark:hidden' />
                    <GrFormNext color='#84cc16' />
                </p>
            </Link>

            <div className=''>
                {transactions.slice(-3).map((transaction, index) => {
                    return (
                        <div key={index} className='flex justify-between my-1'>
                            <p className='text-gray-400 dark:text-white font-semibold text-sm my-auto'>{transaction.transactionOn}</p>
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
    </>
  )
}

export default LastInvestments