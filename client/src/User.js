import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import PaginatedItemsUser from './components/PaginateItemsUser'
import UserProducts from './components/UserProducts'

export default function User() {
  return (
    <>
    <div className='container-fluid'>
      <Header/>
    </div>
    <PaginatedItemsUser itemsPerPage={6}/>
        {/* <UserProducts/> */}
    <Footer/>
    </>

  )
}
