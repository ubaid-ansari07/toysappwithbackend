import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid mt-5 bg-dark text-light'>
        <div className='row p-5'>
            <div className='col-md-2 m-auto'>
                <h6>Shipping & Return</h6>
                <h6>Store Policy</h6>
                <h6>Shipping & Return</h6>
            </div>
            <div className='col-md-2  m-auto'>
                <h6>Contact</h6>
                <h6>+91-5874589654</h6>
                <h6>info@gmail.com</h6>
            </div>
            <div className='col-md-2 m-auto'>
                <h6>Facebook</h6>
                <h6>Instagram</h6>
                <h6>Pintrest</h6>
            </div>
        </div>
        <div className='row p-4'>
           <div className='col-md-8 m-auto'>
           <h5 className='m-auto'>Join our mailing list and never miss an update</h5>
           </div>
        </div>
           <div className='row p-4'>
           <div className='col-md-6 offset-md-2 form-group'>
            <input className='form-control' placeholder='email'></input>
           </div>
           <div className='col-md-2'>
            <button className='btn btn-secondary'>Subscribe</button>
           </div>
           </div>
    </div>
  )
}
