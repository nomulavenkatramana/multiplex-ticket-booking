import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'


function RoutesComp() {
    return (
        <div>
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                
            </Routes>

        </div>
    )
}
export default RoutesComp;