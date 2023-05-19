import React, {useState} from 'react'
import { useContext } from 'react';
import GlobalContext from '../context/globalContext';


const Controller = () => {

  const [isAuto, setIsAuto] = useState(false);
  const context = useContext(GlobalContext);
    const {trade} = context;



  const handleIsAuto = () => {
    if(isAuto){
        clearInterval();
    }else{
        setInterval(() => {
            trade();
        }, 2000);
    }
    setIsAuto(!isAuto);
  }

  return (
    <>
    <div className='mx-auto'>
        <h1 className='text-3xl font-semibold text-center my-2'>CONTROLLER</h1>
        <div className='flex justify-center flex-col'>
            <h3 className='mx-auto my-4 text-2xl font-semibold'>22/01/12</h3>
            <button className='bg-blue-500 my-2 hover:bg-blue-700 text-white mx-auto font-bold py-2 px-4 rounded-lg md:w-1/12 w-2/6'>
                NextDay
            </button>
            <button onClick={handleIsAuto} className='bg-blue-500 my-2 hover:bg-blue-700 text-white mx-auto font-bold py-2 px-4 rounded-lg md:w-1/12 w-2/6'>
                AutoDay
            </button>
        </div>  
        {isAuto &&
        <div className=''>
            <h1 className='text-red-500 font-semibold text-center'>Auto Day is Active</h1>
        </div>
        }
    </div>
    </>
  )
}

export default Controller