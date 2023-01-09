import React, { useEffect, useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Category from './components/Category'
import Sidebar from './components/Sidebar'
import Brand from './components/Brand'
import UpdateBrand from './components/UpdateBrand'
import AddProduct from './components/AddProduct'
import axios from 'axios'
import MasterContext from './components/MasterContext'
import ProductList from './components/ProductList'
export default function App() {
  const [categoryList,setCategoryList] = useState([]);
  const [brandList,setBrandList] = useState([]);
  const [productList,setProductList] = useState([]);
  useEffect(() => {
    loadData();
    loadBrandData();
    loadProductData();
  }, []);
  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/category/list");
    if (response.status) setCategoryList(response.data.data);
  };
  const loadBrandData = async () => {
    const response = await axios.get("http://localhost:8000/brand/list");
    if (response.status) setBrandList(response.data.data);
  };
  const loadProductData = async () => {
    const response = await axios.get("http://localhost:8000/product/list");
    if (response.status) setProductList(response.data.data);
  };
  return (
      <div className="d-flex">
          <Sidebar/>
      <div className='container'>
        <MasterContext.Provider value={{categoryList:categoryList,brandList:brandList,productList:productList}}>
         <Routes>
          <Route path="/category" element={<Category setCategoryList={setCategoryList}/>}/>
          <Route path="/brand" element={<Brand setBrandList={setBrandList}/>}/>
          <Route path="/add-product" element={<AddProduct setProductList={setProductList}/>}/>
          <Route path="/all-product" element={<ProductList setProductList={setProductList}/>}/>
          <Route path="/edit-brand" element={<UpdateBrand/>}/>
         </Routes>
        </MasterContext.Provider>
      </div>
    </div>
  )
}
