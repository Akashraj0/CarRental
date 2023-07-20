import React from 'react'
import Slideshow from './Slideshow/Slideshow'
import AboutData from './About/AboutData';
import Detail from './Detail/Detail'
import Advertise from './Advertise/Advertise'
import Testimony from './Testimony/Testimony'
import FaqData from './FAQ/FaqData';
const Main = () => {
  return (
    <div>
        <Slideshow/>
        <AboutData/>
        <Detail/>
        <Advertise/>
        <Testimony/>
        <FaqData/>
    </div>
  )
}

export default Main