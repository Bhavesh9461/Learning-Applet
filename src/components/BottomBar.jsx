import React from 'react'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft  } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const BottomBar = ({ nextPath }) => {

    const navigate = useNavigate()

  return (
    <div className='w-full h-full overflow-hidden flex items-center justify-between mt-1 px-8'>
        <button
        onClick={()=>{
            navigate(-1)
        }}
         className="left cursor-pointer w-14 h-11 text-black bg-yellow-500 rounded-lg flex items-center justify-center">
            <span className='text-2xl'> <MdKeyboardDoubleArrowLeft/> </span>
        </button>
        <div className="middle select-none">
            <h2 className='font-bold text-3xl'>Tap the incorrect row.</h2>
        </div>
        <button 
        onClick={()=>{
            navigate(nextPath)
        }}        
        className="right cursor-pointer w-14 h-11 text-black bg-yellow-500 rounded-lg flex items-center justify-center">
            <span className='text-2xl'> <MdKeyboardDoubleArrowRight/> </span>
        </button>
    </div>
  )
}

export default BottomBar