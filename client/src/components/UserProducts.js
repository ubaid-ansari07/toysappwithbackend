import React from 'react'
import './UserProduct.css'

export default function UserProducts({currentItems}) {
  return (
    <div className='container mt-5'>
      <div className='row'>
        {currentItems.map((item,index)=> <div className='col-md-4 text-center mb-5'>
            <div className='mb-4'>
                <img className='img-fluid' style={{borderRadius:'10px'}} src={item.image} alt=''/>
            </div>
            <h4><b>{item.name}</b></h4>
            <hr className='m-auto mb-4' style={{width:'50%'}}/>
            <h5  className='mb-4'>&#8377; {item.price}</h5>
            <button style={{width:'100%'}} className='btn btn-secondary'>Add To cart</button>
        </div>)}
      </div>
    </div>
  )
}
