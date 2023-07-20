import React from 'react'
import Inf from './Info.jpg'
import './Pages.css'
const Info = () => {
  return (
    <div className='info-content'>
    <div className='info'>
      <div className='info-para'>
          <p>CarRental is UK based car rental company run by Daniel Brother,We Provide Best rental car for all purpose and we put customer satisfaction
          before other things the employees are expert and well versed in the field they guide you and communicate with to get the best deals for you.</p>
      </div>
      <div className='info-img'>
           <img src={Inf} alt='someimage' width={"70%"}/>
      </div>
    </div>
    </div>
  )
}

export default Info