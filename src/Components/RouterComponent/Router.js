import React from 'react';
import { Routes, Route } from 'react-router-dom'
import EarningReport from '../EarningReport/EarningReport'
import AddMovies from '../AddingMovies/AddMovies'
// import SearchData from '../SearchData/SearchData'
import Login from '../Login/Login'
import Register from '../Register/Register'



function RoutesComp() {
    return (
        <div>
            <Routes>
                <Route path="/earningReport" element={<EarningReport />} />
                <Route path="/addMovies" element={<AddMovies />} />
                {/* <Route path="/searchData" element={<SearchData />} /> */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>

        </div>
    )
}
export default RoutesComp;