import React from 'react'
import StartPage from './pages/StartPage'
import ColorTable from './pages/ColorTable'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <main className='flex justify-center'>

        <Routes>
          <Route path="/" element={<StartPage/>} />
          <Route path="/colortable" element={<ColorTable/>} />
          <Route path="/newpage" element={<StartPage/>} />
        </Routes>

        
      </main>
    </>
  )
}

export default App