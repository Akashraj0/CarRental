import React from 'react'
import './Pages.css'
const Contact = () => {
  return (
    <div className='info-contact'>
      <h1 className='contact-head'>Contact Us</h1>
      <div className='info'>
      <div className='social-link'>
        <h2>Online Forum</h2>
        <a href='/'>Intagram</a>
        <a href='/'>Email Us</a>
        <a href='/'>Telegram</a>
        <a href='/'>Whats App</a>
      </div>
      <div className='contact-para'>
        <h2>Vist Us</h2>
        <p>CarRental.com is a trading name of Booking.com Transport Limited which is a limited company registered in England and Wales (Number: 05179829) whose registered address is at 100 New Bridge Street, London, EC4V 6JA. VAT number: GB 855349007.</p>
      </div>
      </div>
    </div>
  )
}

export default Contact