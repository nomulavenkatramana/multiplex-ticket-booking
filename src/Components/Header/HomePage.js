import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

function HomePage(){
    return (
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/View Details" class="nav-link px-2 link-secondary">View Details</Link></li>
          {/* <li><Link to="/addMovies" class="nav-link px-2 link-dark">Add Movies</Link></li> */}
          {/* <li><Link to="/searchData"class="nav-link px-2 link-dark">SearchData</Link></li> */}
          <li><Link to="/booking" class="nav-link px-2 link-dark">booking</Link></li>
          <li><Link to="/cancel" class="nav-link px-2 link-dark">cancel</Link></li>
         
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="dropdown text-end">
          <a href="!#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="!#" >Earning Report</a></li>
            <li><a class="dropdown-item" href="!#" >Add Movies</a></li>
            <li><a class="dropdown-item" href="!#">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="!#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
    )
}
export default HomePage