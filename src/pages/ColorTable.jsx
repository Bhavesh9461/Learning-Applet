import React from 'react'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'
import BottomBar from '../components/BottomBar'

const ColorTable = () => {
  return (
    <section className='w-full h-screen px-1 py-2'>
        <div className="top h-[90%] flex gap-3">
          <LeftBox/>
          <RightBox/>
        </div>
        <div className="bottom h-[10%]">
          <BottomBar nextPath={"/newpage"}/>
        </div>
    </section>
  )
}

export default ColorTable