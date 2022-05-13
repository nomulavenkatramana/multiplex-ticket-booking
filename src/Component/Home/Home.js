import React from 'react';
import '../../App.css'
import {Link} from 'react-router-dom'
import logo from '../../images/ticket.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    return(
        <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" ><img src={logo} alt="logo" className='logo' /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link to="/Login"className="nav-link" >Login</Link>
              </li>

              <li className="nav-item">
                <Link to="/Register" className="nav-link">Register</Link>
              </li>

             

            </ul>
          </div>
        </div>
      </nav></div>
    )
}

export default Home;