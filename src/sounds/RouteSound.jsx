import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const RouteSound = () => {

    const location = useLocation()
    const audioRef = useRef(new Audio("./audios/click.mp3"))
    const isFirstLoad = useRef(true)

    useEffect(()=>{

        if(isFirstLoad.current){
            isFirstLoad.current = false
            return
        }

        const audio = audioRef.current
        audio.currentTime = 0;
        audio.play()
    }, [location.pathname])

  return null
}

export default RouteSound