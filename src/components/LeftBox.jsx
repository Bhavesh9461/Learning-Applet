import React from 'react'
import data from "../data/colorTable"

const LeftBox = () => {
  return (
    <div className='w-1/2 h-full border-2 border-[var(--yellow-dark)] rounded-2xl px-8 py-3 flex flex-col justify-between text-center'>
        <h2 className='text-3xl font-bold text-[var(--yellow-base)] '> {data[0].info} </h2>
        <div className="imgsDiv w-full h-[80%] overflow-hidden flex flex-wrap gap-x-10 -mt-1">

            {data[0].imgs.map((elem,idx)=>{
                return <div key={idx}>
                    <img className='h-33 w-20 object-center object-cover ' src={elem} alt="" />
                </div>
            })}
        </div>
        <h3 className='text-[1.7rem] font-bold text-[var(--yellow-base)] '> {data[0].ques} </h3>
    </div>
  )
}

export default LeftBox