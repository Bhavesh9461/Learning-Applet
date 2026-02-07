import React, { useEffect } from 'react'
import StartPage from './pages/StartPage'
import ColorTable from './pages/ColorTable'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ToolTable from './pages/ToolTable'
import FurnitureTable from './pages/FurnitureTable'
import ShapeTable from './pages/ShapeTable'
import EndPage from './pages/EndPage'
import RouteSound from './sounds/RouteSound'

const App = () => {

  const navigate = useNavigate()

  useEffect(() => {
    navigate("/", {replace: true})
  }, [])
  

  return (
    <>
      <RouteSound/>
      <main className='flex justify-center'>

        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/colortable" element={<ColorTable/>} />
          <Route path="/tooltable" element={<ToolTable/>} />
          <Route path="/furnituretable" element={<FurnitureTable/>} />
          <Route path="/shapetable" element={<ShapeTable/>} />
          <Route path="/endpage" element={<EndPage/>} />
        </Routes>

        
      </main>
    </>
  )
}

export default App