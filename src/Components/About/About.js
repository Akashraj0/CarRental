import React from 'react'
import './About.css'
const About = ({ img, head, text }) => {
  return (
    <div className='About_box'>
      <img src={img} alt='something' width={"40%"} className='about_img' />
      <h3 className='h'>{head}</h3>
      <p className='para h'>{text}</p>
    </div>
  )
}

export default About