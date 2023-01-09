import axios from 'axios';
import React, { useState } from 'react'

export default function ProductTable({productList,setProductList}) {
  const [alertMess,setAlertMess] = useState("");
  const [failMess,setFailMess] = useState("");
  const remove = async (id, index) => {
    const res = await axios.get("http://localhost:8000/product/delete/" + id);
    if (res.data.status) {
      setAlertMess(res.data.mess);
      productList.splice(index, 1);
      setProductList([...productList]);
    }
  };
  return (
    <div className='container'>
      <div>
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
    
    <table className='table text-center'>
    <thead>
        <tr>
        <th>S No.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Category</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Edit</th>
        <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {productList.map((product,index)=><tr key={index} >
            <td>{index+1}</td>
            <td><img src={"http://localhost:8000/images/"+product.productImage} alt="" style={{width:'80px',height:'80px'}}/></td>
            <td>{product.productName}</td>
            <td>{product.categoryId.categoryName}</td>
            <td>{product.brandId.brandName}</td>
            <td>{product.productPrice}</td>
            <td><button
              className="btn btn-outline-primary"
            //   onClick={() =>
            //     update(category._id, category.categoryName)
            //   }
            >
              <i className="fa fa-edit" aria-hidden="true"></i>
            </button></td>
            <td><button
              className="btn btn-danger"
              onClick={() => remove(product._id, index)}
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button></td>
        </tr>)}
    </tbody>
</table>
</div>
  )
}
