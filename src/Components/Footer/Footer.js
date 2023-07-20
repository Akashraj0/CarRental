import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='container1'>
            <footer className='footer'>
                <div className='foot'>
                    <h4>CAR Rental</h4>
                    <p>We offers a big range of vehicles for all your driving needs.we have the perfect car to meet your needs</p>
                    <span className='fa fa-phone'></span>
                </div>
                <div className='foot'>
                    <h4>COMPANY</h4>
                    <h5>New York</h5>
                    <h5>Careers</h5>
                    <h5>Mobile</h5>
                    <h5>Blog</h5>
                    <h5>How we Work</h5>
                </div>
                <div className='foot'>
                    <h4>WORKING HOURS</h4>
                    <h5>Mon - Fri 9:00AM - 9:00PM</h5>
                    <h5>Sat: 9:00AM - 19:00PM</h5>
                    <h5>Sun: closed</h5>
                </div>
                <div className='foot'>
                    <h4>SUBSCRIPTION</h4>
                    <p>Subscribe your Email address for Latest news & updates</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer