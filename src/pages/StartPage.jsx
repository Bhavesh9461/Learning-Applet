import React from 'react'
import style from "../stylesheets/startpage.module.scss"
import { Link, useNavigate } from 'react-router-dom'

const StartPage = () => {

  const navigate = useNavigate()
   
  return (
    <section className={`${style.startPage} w-full h-screen bg-blue-900 flex flex-col items-center py-8 text-center gap-18`}>
        <div className="top select-none flex flex-col gap-7">
            <h1 className="text-[var(--yellow-base)] text-7xl font-bold ">Reading Tables!</h1>
            <p className='text-[2.4rem] leading-[3.5rem] '>Time to be a data detective <br /> Look closely at the pictures and the table. <br /> Can you find what is wrong?</p>
            <h2 className='text-[2.1rem]'>Tap 'Start' to begin</h2>
        </div>
        <div className={`${style.bottom} relative`}>
            <button
            onClick={()=>{
              navigate(+1)
            }}
            className='px-16 py-4 bg-[var(--yellow-light)] font-semibold text-4xl font-[Arial] text-black rounded-xl border-2 border-black '>
              <Link to="/colortable">Start</Link>
            </button>
            <img className='h-18 absolute -right-5 top-10' src="./gifs/fingerTap.gif" alt="loading..." />
        </div>
    </section>
  )
}

export default StartPage