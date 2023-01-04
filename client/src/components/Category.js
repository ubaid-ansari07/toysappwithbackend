import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
export default function Category() {
  const [categoryList, setCategoryList] = useState([]);
  const [alertMess, setAlertMess] = useState("");
  const [failMess, setFailMess] = useState("");
  let categoryField = useRef("");
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/category/list");
    if (response.status) setCategoryList(response.data.data);
  };
  const save = async () => {
    let catName = categoryField.current.value;
    let index = categoryList.findIndex((cat)=>cat.categoryName == catName )
    if(index != -1){
        setFailMess("Category Name Already Exist...")
        return
    }
    else{
        let obj = {
            categoryName: catName
          };
          const res = await axios.post("http://localhost:8000/category/save", {
            obj,
          });
          setCategoryList([...categoryList, res.data.data]);
    }
  };
  const remove = async (id) => {
    const res = await axios.get("http://localhost:8000/category/delete/" + id);
    if (res.data.status) {
      setAlertMess(res.data.mess);
      loadData();
    }
  };
  return (
    <div className="container-fluid">
      
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
        <div className="col-md-6">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={categoryField}
            ></input>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-group">
            <button className="btn btn-outline-primary" onClick={save}>
              Add
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
        <table className="table">
          <thead>
            <tr>
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
                    <button className="btn btn-outline-primary">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => remove(category._id)}
                    >
                      Delete
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
