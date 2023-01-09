import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function UpdateBrand() {
    const [categoryList,setCategoryList] = useState([]);
    const [btn,setBtn] = useState(false);
    const location =useLocation();
    const categoryField = useRef("");
    const brandField = useRef("");
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
      }, []);
      const loadData = async () => {
        const response = await axios.get("http://localhost:8000/category/list");
        if (response.status) setCategoryList(response.data.data);
      };

      const update = async ()=>{
        let obj={
            _id:location.state.brand._id,
            brandName:brandField.current.value,
            categoryId:categoryField.current.value
        }
        let res = await axios.post('http://localhost:8000/brand/update',obj);
        if(res.data.status){
            window.alert(res.data.mess);
            navigate('/brand');
        }
        else{
            window.alert("Oops!... Something went wrong");
        }
      }
      const checkBrand = (event)=>{
        if(event.target.value == 0)
            setBtn(true)
        else    
            setBtn(false);
      }
  return (
    <div className='container'>
        <div className='row mt-5'>
            <div className='form-group col-md-5'>
                <select ref={categoryField} className='form-select'>
                    <option value={location.state.brand.categoryId._id}>{location.state.brand.categoryId.categoryName}</option>       
                    {categoryList.filter(category=>category._id != location.state.brand.categoryId._id)
                    .map((category,index)=><option key={index} value={category._id}>{category.categoryName}</option>)
                    }             
                </select>
            </div>
            <div className='form-group col-md-5'>
                <input className='form-control' onChange={checkBrand} ref={brandField} defaultValue={location.state.brand.brandName} />
            </div>
            <div className='col-md-2'>
                <button disabled={btn} type="button" onClick={update} className='btn btn-outline-success'>Edit</button>
            </div>
        </div>
    </div>
  )
}
