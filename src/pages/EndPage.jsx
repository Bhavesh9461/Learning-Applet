import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import style from "../stylesheets/endpage.module.scss"

const EndPage = () => {

    const navigate = useNavigate()

  return (
    <section className={`${style.startPage} w-full h-screen bg-blue-900 flex flex-col items-center py-8 text-center gap-18`}>
        <div className="top select-none flex flex-col gap-7">
            <h1 className="text-[var(--yellow-base)] text-7xl font-bold ">Reading Tables!</h1>
            <p className='text-[2.4rem] leading-[3.5rem] '>Great work! <br /> You found all the mistakes! <br /> You have learned how to read data tables.</p>
            <h2 className='text-[2.1rem]'>Tap 'Start Over' to repeat this activity.</h2>
        </div>
        <div
        onClick={()=>{
                navigate("/")
            }}
        className={`${style.bottom} relative`}>
            <button
            className='px-16 py-4 bg-[var(--yellow-light)] font-semibold text-4xl font-[Arial] text-black rounded-xl border-2 border-black'>
              Start Over
            </button>
            <img className='h-18 absolute -right-5 top-10' src="./gifs/fingerTap.gif" alt="loading..." />
        </div>
    </section>
  )
}

export default EndPage