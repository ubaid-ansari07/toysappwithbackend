import React from "react";
import { Link } from "react-router-dom";
// import './Sidebar.css'
export default function Sidebar() {
 

  return(
    <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon">
            {/* <i className="fas fa fa-laugh-wink"></i> */}
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Admin</div>
    </a>
    <hr className="sidebar-divider my-0"/>
    <li className="nav-item active">
        <Link className="nav-link" to="/">
            {/* <i className=" fa fa-fw fa-tachometer-alt"></i> */}
            <span>Dashboard</span></Link>
    </li>
    <hr className="sidebar-divider"/>
    <li className="nav-item">
        <Link className="nav-link" to="/category" >
             <i className="fa fa-list"></i> 
            <span>Categories</span>
        </Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/brand" >
             <i className="fa fa-list"></i> 
            <span>Brands</span>
        </Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/add-product" >
             <i className="fa fa-list"></i> 
            <span>Add Products</span>
        </Link>
    </li>
    <li className="nav-item">
        <Link className="nav-link" to="/all-product" >
             <i className="fa fa-list"></i> 
            <span>All Products</span>
        </Link>
    </li>
    <hr className="sidebar-divider"/>
</ul>
  )
}

