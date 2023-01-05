import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const [alertMess, setAlertMess] = useState("");
  const [failMess, setFailMess] = useState("");
  const [addBtn, setAddBtn] = useState(true);
  const [upBtn, setUpBtn] = useState(true);
  const [cancelUpBtn, setCancelUpBtn] = useState(true);
  const [idField, setIdFiled] = useState("");
  const [isUpdate,setIsUpdate] = useState(true);
  let categoryField = useRef("");
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
      const res = await axios.post("http://localhost:8000/category/save", {
        obj,
      });
      if (res.data.status) {
        setCategoryList([res.data.data, ...categoryList]);
        setAlertMess("Category Added Successfully");
      }
      categoryField.current.value = "";
    }
  };
  const remove = async (id, index) => {
    const res = await axios.get("http://localhost:8000/category/delete/" + id);
    if (res.data.status) {
      setAlertMess(res.data.mess);
      categoryList.splice(index, 1);
      setCategoryList([...categoryList]);
    }
  };
  const update = (id, name) => {
    categoryField.current.value = name;
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
      loadData();
    } else {
      setFailMess(res.data.mess);
      categoryField.current.value = "";
      cancelUp()
      loadData();
    }
    setIsUpdate(true)
  };
  const cancelUp = () => {
    setAddBtn(true);
    setUpBtn(true);
    setCancelUpBtn(true);
    setIsUpdate(true)
    categoryField.current.value = "";
  };
  const checkCat = (e) => {
    if (e.target.value.length != 0 && isUpdate) {
      setAddBtn(false);
    } else {
      setAddBtn(true);
        }
  };
  return (
    <div className="">
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
      <div className="row mt-5">
        <h1>Categories</h1>
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={categoryField}
              onChange={checkCat}
              placeholder="Enter Category Name"
            ></input>
          </div>
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
          <div className="form-group">
            <button
              disabled={addBtn}
              className="btn btn-outline-primary"
              onClick={save}
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
      </div>
      {categoryList.length == 0 ? (
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
      <div>
        <table className="table text-center">
          <thead>
            <tr className="bg-dark text-white">
              <th>S No.</th>
              <th>Category Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{category.categoryName}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() =>
                        update(category._id, category.categoryName)
                      }
                    >
                      <i className="fa fa-edit" aria-hidden="true"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => remove(category._id, index)}
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
