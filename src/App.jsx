import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

import Navbar from './conponents/Navbar/Navbar'
import Sidebar from './conponents/Sidebar/Sidebar'

import './index.css'
import Alltools from './pages/Alltools/Alltools'
import Assigned from './pages/Assigned/Assigned'
import Important from './pages/Important/Important'
import Planned from './pages/Planned/Planned'
import Today from './pages/Today/Today'



const App = () => {


  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isBoxTodayVisible, setIsBoxTodayVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };


  const toggleView = () => {
    setIsBoxTodayVisible((prev) => !prev);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} toggleView={toggleView} isBoxTodayVisible={isBoxTodayVisible}/>
      <div className='app'>
        <Sidebar isSidebarVisible={isSidebarVisible}/>
        <div className={`main-content ${isSidebarVisible ? '' : 'full-width'}`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/alltools' element={<Alltools />} />
            <Route path='/today' element={<Today isBoxTodayVisible={isBoxTodayVisible}/>} />
            <Route path='/assigned' element={<Assigned />} />
            <Route path='/important' element={<Important />} />
            <Route path='/planned' element={<Planned />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App