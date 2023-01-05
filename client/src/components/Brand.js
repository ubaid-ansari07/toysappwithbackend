import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Brand() {
  const [brandStatus, setBrandStatus] = useState(false);
  const [catStatus, setCatStatus] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/category/list");
    if (response.status) setCategoryList(response.data.data);
  };
  const save = async () => {
    let catName = categoryField.current.value.toLowerCase();
    let index = categoryList.findIndex(
      (cat) => cat.categoryName.toLowerCase() == catName
    );
    if (index != -1) {
      setFailMess("Category Name Already Exist...");
      return;
    } else {
      let obj = {
        categoryName: categoryField.current.value,
      };
      const res = await axios.post("http://localhost:8000/brand/save", {
        obj,
      });
      if (res.data.status) {
        setCategoryList([res.data.data, ...categoryList]);
        setAlertMess("Category Added Successfully");
      }
      categoryField.current.value = "";
    }
  };
  const brand = (e) => {
    if (e.target.value.length != 0) {
      setBrandStatus(true);
    } else {
      setBrandStatus(false);
    }
  };
  const cat = (e) => {
    if (e.target.value !== "0") {
      setCatStatus(true);
    } else {
      setCatStatus(false);
    }
  };
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-4">
          <select className="form-control" onChange={cat}>
            <option value="0">Select category</option>
            {categoryList.map((category, index) => {
              return (
                <option key={index} value={category._id}>
                  {category.categoryName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-4">
          <input type="text" onChange={brand} className="form-control" placeholder="Enter brand name" />
        </div>
        <div className="col-md-2">
        <button type="" disabled={!(catStatus && brandStatus)} className='btn btn-primary'>Add</button>
        </div>
      </div>
    </div>
  );
}
