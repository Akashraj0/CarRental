import React from 'react'
import Bookingform from '../Components/Booking/Bookingform'
import { useNavigate } from 'react-router-dom'

const Bookingpage = () => {
  const navigate = useNavigate();
  return (
    <div><Bookingform navigate={navigate}/></div>
  )
}

export default Bookingpage