import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Category from './components/Category'
import Sidebar from './components/Sidebar'
import Brand from './components/Brand'
export default function App() {
  return (
      <div className="d-flex">
          <Sidebar/>
      <div className='container'>
         <Routes>
          <Route path="/category" element={<Category/>}/>
          <Route path="/brand" element={<Brand/>}/>
         </Routes>
      </div>
    </div>
  )
}
