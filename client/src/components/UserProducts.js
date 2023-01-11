import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './UserProduct.css'

export default function UserProducts({currentItems}) {
  const [content, setContent] = useState();
  let navigate = useNavigate();
  const details = (obj)=>{
    navigate('/product-details',{state:{obj}})
  }

  let dModal = (product)=>{
    let element=<div className='modal-content'>
      <div className='container my-5'>
        <div className='row'>
            <div className='col-md-6'>
                <img src={"http://localhost:8000/images/"+product.productImage} alt="" className='img-fluid'style={{borderRadius:'20px'}} />
            </div>
            <div className='col-md-6'>
                <h2>{product.productName}</h2>
                <h4>Price:- &#8377; {product.productPrice}</h4>
                <h5>Brand :- {product.brandId.brandName}</h5>
                <h5>Category :- {product.categoryId.categoryName}</h5>
                <p>About:- </p>
                <p>{product.productDescription}</p>
            </div>
        </div>
    </div>
    </div>
   setContent(element);
  }
  return (
    <div className='container mt-5'>
      <div className='row'>
        {currentItems.map((item,index)=> <div className='col-md-4 text-center mb-5 mt-5' key={index}>
            <div className='mb-4'>
            <img src={"http://localhost:8000/images/"+item.productImage} onClick={()=>details(item)} alt="" className='img-fluid' style={{width:'70%',height:'15em'}}/>
            </div>
            <h4><b>{item.productName}</b></h4>
            <hr className='m-auto mb-4' style={{width:'50%'}}/>
            <h5  className='mb-4'>&#8377; {item.productPrice}</h5>
            <div className='row'>
              <div className='col-md-4 offset-md-5'>

            <button type="button" onClick={()=>dModal(item)} style={{width:'100%'}} className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">More</button>
              </div>
              <div className='col-md-3'>

            <button style={{width:'100%'}} className='btn btn-dark'><i class="fa fa-cart-plus" aria-hidden="true"></i></button>
              </div>
            </div>

            {/* modal */}
            <div className="modal fade bd-example-modal-lg" tabIndex="1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            {/* <div className="modal-content">
              {item.productName}
            </div> */}
           {content}
          </div>
        </div>
        </div>)}
      </div>

        
    </div>
  )
}
