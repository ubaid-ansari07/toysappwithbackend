import React from 'react'

export default function Header() {
  return (
    <div className='row bg-dark text-light p-2' style={{position:''}}>
      <div className='col-md-4 m-auto'>
        <h1 className=''>ABC</h1>
      </div>
      <div className='col-md-4 m-auto'>
        <ul className='nav d-flex justify-content-evenly'>
            <li className='nav-pills'>Shop</li>
            <li className='nav-pills'>About</li>
            <li className='nav-pills'>FAQ</li>
            <li className='nav-pills'>Contact</li>
        </ul>
      </div>
      <div className='col-md-4 m-auto'>
        <div className='row'>
            <div className='col-md-4 form-group'>
                <input className='form-control' placeholder='Search...'></input>
            </div>
            <div className='col-md-4 m-auto'>
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            <span className='ml-5'  style={{marginLeft:'0.5em'}}>Login</span>
            </div>
            <div className='col-md-4 m-auto'>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <span className='ml-5' style={{marginLeft:'0.5em'}}>Cart</span>
            </div>
        </div>
      </div>
    </div>
  )
}
