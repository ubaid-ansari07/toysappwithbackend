import React, { useContext, useRef, useState } from 'react'
import MasterContext from './MasterContext'
import axios from 'axios';
export default function AddProduct({setProductList}) {
  const [brands,setBrands]= useState([]);
  const [alertMess,setAlertMess] = useState("");
  const [failMess,setFailMess] = useState("");
  const {categoryList} = useContext(MasterContext);
  const {brandList} = useContext(MasterContext);
  const {productList} = useContext(MasterContext);
  const categoryField = useRef("");
  const brandField = useRef("");
  const productName = useRef("");
  const productPrice = useRef(0);
  const productQty = useRef(0);
  const productDescription = useRef("");
  let fileName = useRef("");


  const changeBrand = ()=>{
    let arr=brandList.filter(brand=>brand.categoryId._id == categoryField.current.value);
    setBrands(arr);
  }
  const fileChange = (event)=>{
    fileName = event.target.files[0];
  }
  const save = async ()=>{
    let formData = new FormData();
    formData.append("productImage",fileName);
    formData.set("categoryId",categoryField.current.value);
    formData.set("brandId",brandField.current.value);
    formData.set("productName",productName.current.value);
    formData.set("productPrice",productPrice.current.value*1);
    formData.set("productQty",productQty.current.value*1);
    formData.set("productDescription",productDescription.current.value);
    let res = await axios.post('http://localhost:8000/product/save',formData);
    if(res.data.status){
      setAlertMess(res.data.mess);
      setProductList([...productList,res.data.data])

    }
    else{
      setFailMess(res.data.mess);
      setProductList([...productList])
    }
    }
  return (
   <div className='container mt-5'>
    <div className='row'>
    {alertMess ? (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Success</strong> {alertMess}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}
      {failMess ? (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Failure</strong> {failMess}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        ""
      )}
    </div>
      <div className='form-group'>
        <select onChange={changeBrand} ref={categoryField} className='form-select'>
            <option value="0">Select Category...</option>
            {categoryList.map((category,index)=><option key={index} value={category._id}>{category.categoryName}</option>)}
        </select>
      </div>
      <div className='form-group'>
        <select className='form-select' ref={brandField}>
        {brands.map((brand,index)=><option key={index} value={brand._id}>{brand.brandName}</option>)}
        </select>
      </div>
      <div className='form-group'>
        <input ref={productName} className="form-control" placeholder='Enter Product Name'/>
      </div>
      <div className='form-group'>
        <input ref={productPrice} type="number" className="form-control" placeholder='Enter Product Price'/>
      </div>
      <div className='form-group'>
        <input ref={productQty} className="form-control" placeholder='Enter Product Quantity'/>
      </div>
      <div className='form-group'>
        <textarea rows="3" ref={productDescription} cols="" className='form-control' placeholder='Product Description'></textarea>
      </div>
      <div className='form-group'>
        <input onChange={fileChange} ref={fileName} type="file" className="form-control" placeholder='Enter Product Name'/>
      </div>
      <div className='form-group'>
       <button onClick={save} type="button" className='btn btn-primary'>Add Product</button>
      </div>
   </div>
  )
}
