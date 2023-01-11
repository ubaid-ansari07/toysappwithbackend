import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ProductDetails() {
    let location = useLocation();
    let product = location.state.obj;
  return (
    <div className='container mt-5'>
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
  )
}
