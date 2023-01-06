import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

export default function Brand() {
  const [brandStatus, setBrandStatus] = useState(false);
  const [catStatus, setCatStatus] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [alertMess, setAlertMess] = useState("");
  const [failMess, setFailMess] = useState("");
  const [idField, setIdFiled] = useState("");
  const [addBtn, setAddBtn] = useState(true);
  const [upBtn, setUpBtn] = useState(true);
  const [cancelUpBtn, setCancelUpBtn] = useState(true);
  const [isUpdate,setIsUpdate] = useState(true);

  let categoryField = useRef("");
  let brandField = useRef("");
  useEffect(() => {
    loadBrandData();
    loadCategoryData();
  }, []);
  const loadBrandData = async () => {
    const response = await axios.get("http://localhost:8000/brand/list");
    if (response.status) setBrandList(response.data.data);
  };
  const loadCategoryData = async () => {
    const response = await axios.get("http://localhost:8000/category/list");
    if (response.status) setCategoryList(response.data.data);
  };
  const save = async () => {
    let brName = brandField.current.value.toLowerCase();
    let index = brandList.findIndex(
      (brand) => brand.brandName.toLowerCase() == brName
    );
    if (index != -1) {
      setFailMess("Category Name Already Exist...");
      return;
    } else {
      let obj = {
        brandName: brandField.current.value,
        categoryId: categoryField.current.value,
      };
      const res = await axios.post("http://localhost:8000/brand/save", {
        obj,
      });
      if (res.data.status) {
        console.log(res.data.data);
        setBrandList(res.data.data);
        setAlertMess("Category Added Successfully");
      }
      brandField.current.value = "";
    }
  };
  const remove = async (id, index) => {
    const res = await axios.get("http://localhost:8000/brand/delete/" + id);
    if (res.data.status) {
      setAlertMess(res.data.mess);
      brandList.splice(index, 1);
      setBrandList([...brandList]);
    }
  };
  const update = (id, brname,catName) => {
    console.log(brname,catName);
    brandField.current.value = brname;
    categoryField.current.value = catName;
    let catArr = categoryList.filter(category=>category.categoryName != catName)
    setCategoryList([catName,...catArr]);
    setIdFiled(id);
    setAddBtn(true);
    setUpBtn(false);
    setIsUpdate(false)
    setCancelUpBtn(false);
  };
  const updateCat = async () => {
    let newObj = {
      id: idField,
      categoryName: categoryField.current.value,
    };
    let res = await axios.post("http://localhost:8000/category/update", newObj);
    if (res.data.status) {
      setAlertMess(res.data.mess);
      categoryField.current.value = "";
      cancelUp()
      loadBrandData();
    } else {
      setFailMess(res.data.mess);
      categoryField.current.value = "";
      cancelUp()
      loadBrandData();
    }
    setIsUpdate(true)
  };
  const cancelUp = () => {
    setAddBtn(true);
    setUpBtn(true);
    setCancelUpBtn(true);
    setIsUpdate(true)
    brandField.current.value = "";
  };
  const checkCat = (e) => {
    if (e.target.value.length != 0 && isUpdate) {
      setAddBtn(false);
    } else {
      setAddBtn(true);
        }
  };
  const brand = (e) => {
    if (e.target.value.length != 0 && isUpdate)  {
      setBrandStatus(true);
      setAddBtn(false);
    } else {
      setBrandStatus(false);
      setAddBtn(true);
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
      <div className="row mt-5 mb-5">
        <div className="col-md-4">
          <select className="form-control" ref={categoryField} onChange={cat}>
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
          <input
            type="text"
            onChange={brand}
            ref={brandField}
            className="form-control"
            placeholder="Enter brand name"
          />
          <div className="form-group">
            <input
              type="hidden"
              className="form-control"
              value={idField}
              placeholder="Enter Category Name"
            ></input>
          </div>
        </div>
        <div className="col-md-4">
          <button
            type=""
            disabled={!(catStatus && brandStatus)}
            onClick={save}
            className="btn btn-primary"
          >
            Add
          </button>
          <button
              disabled={upBtn}
              onClick={() => {
                updateCat();
              }}
              className="btn btn-outline-primary ml-3"
            >
              Update
            </button>
            <button
              disabled={cancelUpBtn}
              onClick={() => {
                cancelUp();
              }}
              className="btn btn-danger ml-3"
            >
              cancel Update
            </button>
        </div>
      </div>
      {brandList.length == 0 ? (
        <div>
          <div className="spinner-grow text-muted"></div>
          <div className="spinner-grow text-primary"></div>
          <div className="spinner-grow text-success"></div>
          <div className="spinner-grow text-info"></div>
          <div className="spinner-grow text-warning"></div>
          <div className="spinner-grow text-danger"></div>
          <div className="spinner-grow text-secondary"></div>
          <div className="spinner-grow text-dark"></div>
          <div className="spinner-grow text-light"></div>
        </div>
      ) : (
        ""
      )}
      <div className="row mt-5">
      <table className="table text-center">
          <thead>
            <tr className="bg-dark text-white">
              <th>S No.</th>
              <th>Brand Name</th>
              <th>Category Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {brandList.map((brand, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{brand.brandName}</td>
                  <td>{brand.categoryId.categoryName}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() =>
                        update(brand._id, brand.brandName,brand.categoryId.categoryName)
                      }
                    >
                      <i className="fa fa-edit" aria-hidden="true"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => remove(brand._id, index)}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
