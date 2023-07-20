import React from 'react'
import './Testimony.css'
import boy from './Boy.jpg'
import girl from './Girl1.jpg'
const Testimony = () => {
  return (
    <section className='Testimonyc'>
      <div className='Intro'>
        <h5 className='h'>Reviewed by people</h5>
        <h1 className='h'>Client's Testimonilas</h1>
        <p className='para'>Discover the positive Impact we're made on the our client by reaing through their
          tesimonials our orients have experiences our service and result, and they're eager to share their
          positive experiences with you
        </p>
      </div>
      <div className='review'>
        <div>
          <h5 className='test-sub-head'>"We rented a car from this website an had an amazing experience! The booking was easy and the rental rates pretty affordable"</h5>
          <div>
            <img src={boy} alt='something' width={"12%"} className='about_img' />
            <span className='span'>Jon Clark</span>
          </div>
        </div>
        <div>
          <h5 className='test-sub-head'>"The car was in great condition and mae our trip even better. Highly recommend for this car rental website"</h5>
          <div>
            <img src={girl} alt='something' width={"15%"} className='about_img' />
            <span className='span'>Louis Lane</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimony