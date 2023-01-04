import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Category from './components/Category'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
      <div className="d-flex align-items-stretch">
          <Sidebar/>
      <div className="page-content">
         <Routes>
          <Route path="/category" element={<Category/>}/>
         </Routes>
      </div>
    </div>
  )
}
