// import React from 'react'

// export default function Header() {
//   return (
//     <header className="header">   
//     <nav className="navbar navbar-expand-lg py-3 bg-dash-dark-2 border-bottom border-dash-dark-1 z-index-10">
//       <div className="search-panel">
//         <div className="search-inner d-flex align-items-center justify-content-center">
//           <div className="close-btn d-flex align-items-center position-absolute top-0 end-0 me-4 mt-2 cursor-pointer"><span>Close </span>
//                 <svg className="svg-icon svg-icon-md svg-icon-heavy text-gray-700 mt-1">
//                   <use xlink:href="#close-1"> </use>
//                 </svg>
//           </div>
//           <div className="row w-100">
//             <div className="col-lg-8 mx-auto">
//               <form className="px-4" id="searchForm" action="#">
//                 <div className="input-group position-relative flex-column flex-lg-row flex-nowrap">
//                   <input className="form-control shadow-0 bg-none px-0 w-100" type="search" name="search" placeholder="What are you searching for..."/>
//                   <button className="btn btn-link text-gray-600 px-0 text-decoration-none fw-bold cursor-pointer text-center" type="submit">Search</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid d-flex align-items-center justify-content-between py-1">
//         <div className="navbar-header d-flex align-items-center"><a className="navbar-brand text-uppercase text-reset" href="index.html">
//             <div className="brand-text brand-big"><strong className="text-primary">Dark</strong><strong>Admin</strong></div>
//             <div className="brand-text brand-sm"><strong className="text-primary">D</strong><strong>A</strong></div></a>
//           <button className="sidebar-toggle">
//                 <svg className="svg-icon svg-icon-sm svg-icon-heavy transform-none">
//                   <use xlink:href="#arrow-left-1"> </use>
//                 </svg>
//           </button>
//         </div>
//         <ul className="list-inline mb-0">
//           <li className="list-inline-item"><a className="search-open nav-link px-0" href="#">
//                   <svg className="svg-icon svg-icon-xs svg-icon-heavy text-gray-700">
//                     <use xlink:href="#find-1"> </use>
//                   </svg></a></li>
//           <!-- Messages dropdown -->
//           <li className="list-inline-item dropdown px-lg-2"><a className="nav-link text-reset px-1 px-lg-0" id="navbarDropdownMenuLink1" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   <svg className="svg-icon svg-icon-xs svg-icon-heavy">
//                     <use xlink:href="#envelope-1"> </use>
//                   </svg><span className="badge bg-dash-color-1">5</span></a>
//             <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink1">
//               <li><a className="dropdown-item d-flex align-items-center" href="#">
//                   <div className="position-relative"><img className="avatar avatar-md" src="img/avatar-3.jpg" alt="Nadia Halsey">
//                     <div className="availability-status bg-success"></div>
//                   </div>
//                   <div className="ms-3">   <strong className="d-block">Nadia Halsey</strong><span className="d-block text-xs">lorem ipsum dolor sit amit</span><small className="d-block">9:30am</small></div></a></li>
//               <li><a className="dropdown-item d-flex align-items-center" href="#">
//                   <div className="position-relative"><img className="avatar avatar-md" src="img/avatar-2.jpg" alt="Peter Ramsy">
//                     <div className="availability-status bg-warning"></div>
//                   </div>
//                   <div className="ms-3">   <strong className="d-block">Nadia Halsey</strong><span className="d-block text-xs">lorem ipsum dolor sit amit</span><small className="d-block">9:30am</small></div></a></li>
//               <li><a className="dropdown-item d-flex align-items-center" href="#">
//                   <div className="position-relative"><img className="avatar avatar-md" src="img/avatar-1.jpg" alt="Sam Kaheil">
//                     <div className="availability-status bg-danger"></div>
//                   </div>
//                   <div className="ms-3">   <strong className="d-block">Nadia Halsey</strong><span className="d-block text-xs">lorem ipsum dolor sit amit</span><small className="d-block">9:30am</small></div></a></li>
//               <li><a className="dropdown-item d-flex align-items-center" href="#">
//                   <div className="position-relative"><img className="avatar avatar-md" src="img/avatar-5.jpg" alt="Sara Wood">
//                     <div className="availability-status bg-secondary"></div>
//                   </div>
//                   <div className="ms-3">   <strong className="d-block">Nadia Halsey</strong><span className="d-block text-xs">lorem ipsum dolor sit amit</span><small className="d-block">9:30am</small></div></a></li>
//               <li><a className="dropdown-item text-center message" href="#"> <strong>See All Messages <i className="fas fa-angle-right ms-1"></i></strong></a></li>
//             </ul>
//           </li>
//           <!-- Tasks dropdown                   -->
//           <li className="list-inline-item dropdown px-lg-2"><a className="nav-link text-reset px-1 px-lg-0" id="navbarDropdownMenuLink2" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   <svg className="svg-icon svg-icon-xs svg-icon-heavy">
//                     <use xlink:href="#paper-stack-1"> </use>
//                   </svg><span className="badge bg-dash-color-3">9</span></a>
//             <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink2">
//               <li><a className="dropdown-item" href="#">
//                   <div className="d-flex justify-content-between mb-1"><strong>Task 1</strong><span>40% complete</span></div>
//                   <div className="progress" style="height: 2px">
//                     <div className="progress-bar bg-dash-color-1" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
//                   </div></a></li>
//               <li><a className="dropdown-item" href="#">
//                   <div className="d-flex justify-content-between mb-1"><strong>Task 2</strong><span>20% complete</span></div>
//                   <div className="progress" style="height: 2px">
//                     <div className="progress-bar bg-dash-color-2" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
//                   </div></a></li>
//               <li><a className="dropdown-item" href="#">
//                   <div className="d-flex justify-content-between mb-1"><strong>Task 3</strong><span>70% complete</span></div>
//                   <div className="progress" style="height: 2px">
//                     <div className="progress-bar bg-dash-color-3" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
//                   </div></a></li>
//               <li><a className="dropdown-item" href="#">
//                   <div className="d-flex justify-content-between mb-1"><strong>Task 4</strong><span>40% complete</span></div>
//                   <div className="progress" style="height: 2px">
//                     <div className="progress-bar bg-dash-color-4" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
//                   </div></a></li>
//               <li><a className="dropdown-item" href="#">
//                   <div className="d-flex justify-content-between mb-1"><strong>Task 5</strong><span>30% complete</span></div>
//                   <div className="progress" style="height: 2px">
//                     <div className="progress-bar bg-dash-color-1" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
//                   </div></a></li>
//               <li>           <a className="dropdown-item text-center" href="#"> <strong>See All Tasks <i className="fas fa-angle-right ms-1"></i></strong></a></li>
//             </ul>
//           </li>
//           <!-- Mega menu-->
//           <li className="list-inline-item dropdown menu-large px-lg-2"><a className="nav-link text-sm text-reset px-1 px-lg-0" href="#" data-bs-toggle="dropdown">Mega <i className="fas fa-ellipsis-v ms-1"></i></a>
//             <ul className="dropdown-menu megamenu dropdown-menu-dark p-4">
//               <div className="row gy-3 mb-4">
//                 <div className="col-lg-3">
//                   <h6 className="mb-2 text-uppercase">Elements Heading</h6>
//                   <ul className="list-unstyled text-gray-700">
//                     <li className="py-1"><a className="inherit-link" href="#">Lorem ipsum dolor</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Sed ut perspiciatis</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Voluptatum deleniti</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">At vero eos</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Consectetur adipiscing</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Duis aute irure</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Necessitatibus saepe</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Maiores alias</a></li>
//                   </ul>
//                 </div>
//                 <div className="col-lg-3">
//                   <h6 className="mb-2 text-uppercase">Elements Heading</h6>
//                   <ul className="list-unstyled text-gray-700">
//                     <li className="py-1"><a className="inherit-link" href="#">Lorem ipsum dolor</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Sed ut perspiciatis</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Voluptatum deleniti</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">At vero eos</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Consectetur adipiscing</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Duis aute irure</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Necessitatibus saepe</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Maiores alias</a></li>
//                   </ul>
//                 </div>
//                 <div className="col-lg-3">
//                   <h6 className="mb-2 text-uppercase">Elements Heading</h6>
//                   <ul className="list-unstyled text-gray-700">
//                     <li className="py-1"><a className="inherit-link" href="#">Lorem ipsum dolor</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Sed ut perspiciatis</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Voluptatum deleniti</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">At vero eos</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Consectetur adipiscing</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Duis aute irure</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Necessitatibus saepe</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Maiores alias</a></li>
//                   </ul>
//                 </div>
//                 <div className="col-lg-3">
//                   <h6 className="mb-2 text-uppercase">Elements Heading</h6>
//                   <ul className="list-unstyled text-gray-700">
//                     <li className="py-1"><a className="inherit-link" href="#">Lorem ipsum dolor</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Sed ut perspiciatis</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Voluptatum deleniti</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">At vero eos</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Consectetur adipiscing</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Duis aute irure</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Necessitatibus saepe</a></li>
//                     <li className="py-1"><a className="inherit-link" href="#">Maiores alias</a></li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="row text-center gy-3">
//                 <div className="col-lg-2 col-md-4"><a className="d-block p-4 text-white bg-dash-color-1" href="#">
//                         <svg className="svg-icon svg-icon-sm sv-icon-heavy text-white">
//                           <use xlink:href="#time-1"> </use>
//                         </svg>
//                     <p className="text-sm d mb-0">Demo 1</p></a></div>
//                 <div className="col-lg-2 col-md-4"><a className="d-block p-4 text-white bg-dash-color-2" href="#">
//                         <svg className="svg-icon svg-icon-sm sv-icon-heavy text-white">
//                           <use xlink:href="#time-1"> </use>
//                         </svg>
//                     <p className="text-sm d mb-0">Demo 2</p></a></div>
//                 <div className="col-lg-2 col-md-4"><a className="d-block p-4 text-white bg-dash-color-3" href="#">
//                         <svg className="svg-icon svg-icon-sm sv-icon-heavy text-white">
//                           <use xlink:href="#time-1"> </use>
//                         </svg>
//                     <p className="text-sm d mb-0">Demo 3</p></a></div>
//                 <div className="col-lg-2 col-md-4"><a className="d-block p-4 text-white bg-dash-color-4" href="#">
//                         <svg className="svg-icon svg-icon-sm sv-icon-heavy text-white">
//                           <use xlink:href="#time-1"> </use>
//                         </svg>
//                     <p className="text-sm d mb-0">Demo 4</p></a></div>
//                 <div className="col-lg-2 col-md-4"><a className="d-block p-4 text-white bg-danger" href="#">
//                         <svg className="svg-icon svg-icon-sm sv-icon-heavy text-white">
//                           <use xlink:href="#time-1"> </use>
//                         </svg>
//                     <p className="text-sm d mb-0">Demo 5</p></a></div>
//                 <div className="col-lg-2 col-md-4"><a className="d-block p-4 text-white bg-info" href="#">
//                         <svg className="svg-icon svg-icon-sm sv-icon-heavy text-white">
//                           <use xlink:href="#time-1"> </use>
//                         </svg>
//                     <p className="text-sm d mb-0">Demo 6</p></a></div>
//               </div>
//             </ul>
//           </li>
//           <!-- Languages dropdown    -->
//           <li className="list-inline-item dropdown"><a className="nav-link dropdown-toggle text-sm text-reset px-1 px-lg-0" id="languages" rel="nofollow" data-bs-target="#" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="img/flags/16/GB.png" alt="English"><span className="d-none d-sm-inline-block ms-2">English</span></a>
//             <ul className="dropdown-menu dropdown-menu-end mt-sm-3 dropdown-menu-dark" aria-labelledby="languages">
//               <li><a className="dropdown-item" rel="nofollow" href="#"> <img className="me-2" src="img/flags/16/DE.png" alt="English"><span>German</span></a></li>
//               <li><a className="dropdown-item" rel="nofollow" href="#"> <img className="me-2" src="img/flags/16/FR.png" alt="English"><span>French                   </span></a></li>
//             </ul>
//           </li>
//           <li className="list-inline-item logout px-lg-2">                 <a className="nav-link text-sm text-reset px-1 px-lg-0" id="logout" href="login.html"> <span className="d-none d-sm-inline-block">Logout </span>
//                   <svg className="svg-icon svg-icon-xs svg-icon-heavy">
//                     <use xlink:href="#disable-1"> </use>
//                   </svg></a></li>
//         </ul>
//       </div>
//     </nav>
//   </header>
//   )
// }
