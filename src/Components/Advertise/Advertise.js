import React from 'react'
import "./Advertise.css"
import image from './cars.png';
import image1 from './Cross.png';
import image2 from './dollar.png';
import image3 from './hand.png';
const Advertise = () => {
  return (
    <section className='avertise'>
      <div className='section1'>
        <h1>Save big with our cheap car rental!</h1>
        <h4>Top Airport Local Suppliers.<span style={{ color: "#32527b" }}>&nbsp;24/7&nbsp;</span>Support</h4>
      </div>
      <div className='section2'>
        <img src={image} alt='something' width={"100%"} />
      </div>
      <section className='section3'>
        <div className='lt'>
          <h5>Why Choose Us</h5>
          <h1 style={{ fontSize: "40px", textAlign: "left" }}>Best valued deals you will ever find</h1>
          <p style={{ textAlign: "justify", fontSize: "20px" }}>Discover the best deals you'll ever find with our unbeatable Offers. We're dedicated to providing you with the best value for yourmoney
            .so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience.
            don't miss out on your chance to save big
          </p>
          <button className='btn'>Find Details</button>
        </div>
        <div className='rt'>
          <div className='point'>
            <img src={image1} alt='cross-road' width={"30%"} className='img' />
            <div>
              <h2>Cross Country Drive</h2>
              <p style={{ fontSize: "20px" }}>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures</p>
            </div>
          </div>
          <div className='point'>
            <img src={image3} alt='cross-road' width={"30%"} className='img' />
            <div>
              <h2>Cross Country Drive</h2>
              <p style={{ fontSize: "20px" }}>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures</p>
            </div>
          </div>
          <div className='point'>
            <img src={image2} alt='cross-road' width={"30%"} className='img' />
            <div>
              <h2>Cross Country Drive</h2>
              <p style={{ fontSize: "20px" }}>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Advertise