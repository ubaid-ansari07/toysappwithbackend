import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  let navigate = useNavigate();
  return (
    <div className='row text-light p-2' style={{backgroundColor:'#d9514e',borderRadius:'25px'}}>
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
            <div className='col-md-3 m-auto form-group'>
                <input className='form-control' placeholder='Search...'></input>
            </div>
            <div className='col-md-3 m-auto'>
            <a href="" style={{color:'white'}}><i className="fa fa-user-circle-o" aria-hidden="true"><span className='ml-1'>Login</span></i></a>
            
            </div>
            <div className='col-md-3 m-auto'>
            <a href="" style={{color:'white'}}><i className="fa fa-shopping-cart" aria-hidden="true"><span className='ml-1'>Cart</span></i></a>
            
            </div>
            <div className='col-md-3 m-auto'>
            <a href="" style={{color:'white'}}><i className="fa fa-user" aria-hidden="true"><span className='ml-1' onClick={()=>navigate('/category')}>Admin</span></i></a>
            
            </div>
        </div>
      </div>
    </div>
  )
}
