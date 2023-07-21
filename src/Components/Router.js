import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Nav from './Navigation/Nav';
import Bookingpage from '../Page/Bookingpage';
import Main from './Main';
import BookingConfirmation from './Booking/BookingConfirmation';
import Info from '../Page/Info';
import Contact from '../Page/Contact';
import SignIn from '../Page/SignIn';
import Register from '../Page/Register';
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='CarRental' element={<Main/>}/>
        <Route path="/bookingform" element={<Bookingpage/>}/>
        <Route path="/bookingconformation" element={<BookingConfirmation/>}/>
        <Route path='/about' element={<Info/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default Router