import React from 'react';
import { Routes, Route } from 'react-router-dom'
import EarningReport from '../EarningReport/EarningReport'
import AddMovies from '../AddingMovies/AddMovies'
// import SearchData from '../SearchData/SearchData'
import Login from '../Login/Login'
import Register from '../Register/Register'
import AdminLogin from '../Login/AdminLogin'




function RoutesComp() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/earningReport" element={<EarningReport />} />
                <Route path="/addMovies" element={<AddMovies />} />
                {/* <Route path="/searchData" element={<SearchData />} /> */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/AdminLogin" element={<AdminLogin />} />
                
            </Routes>

        </div>
    )
}
export default RoutesComp;