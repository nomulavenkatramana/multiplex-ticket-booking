import React from 'react';
import { Routes, Route } from 'react-router-dom'
import EarningReport from '../EarningReport/EarningReport'
import AddMovies from '../AddingMovies/AddMovies'
import Login from '../Login/Login'
import Register from '../Register/Register'
import AdminLogin from '../Login/AdminLogin'
import PaymentModal from '../PaymentModal/PaymentModal'
import ViewDetails from '../Service/ViewDetails'
import BookingList from '../BookingList/BookingList'
import SeatBooking from '../BookingList/SeatBooking'
import BookingPage from '../BookingList/BookingsPage'




function RoutesComp() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/earningReport" element={<EarningReport />} />
                <Route path="/addMovies" element={<AddMovies />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/AdminLogin" element={<AdminLogin />} /> 
                <Route path="/payment" element={<PaymentModal />} />
                <Route path="/details" element={<ViewDetails />} />
                <Route path="/booking" element={<BookingList />} />
                <Route path="/seatBooking" element={<SeatBooking/>} />
                <Route path="/bookingPage" element={<BookingPage/>} />

            </Routes>

        </div>
    )
}
export default RoutesComp;