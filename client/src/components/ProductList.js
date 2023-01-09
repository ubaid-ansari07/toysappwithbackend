import axios from 'axios';
import React, { useContext, useState } from 'react'
import MasterContext from './MasterContext'
import PaginatedItems from './PaginatedItems';
import ProductTable from './ProductTable';

export default function ProductList({setProductList}) {

    let {productList} = useContext(MasterContext);
 
  return (
    <div className='container mt-5 text-center'>
        <h1 className='mt-5 mb-5'>All Products</h1>

        <PaginatedItems itemsPerPage={3} items={productList} setProductList={setProductList}></PaginatedItems>
    </div>
  )
}
