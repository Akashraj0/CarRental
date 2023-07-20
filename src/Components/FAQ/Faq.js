import { useState } from "react";
import arrow from './arrow.png'
import "./Faq.css"
const Faq = ({ items }) => {
  const [activeindex, setActiveindex] = useState(-1);
  const handleClick = (index) => {
    setActiveindex(index === activeindex ? -1 : index);
  }
  return (
    <section className='FAQ'>
      <div className='First'>
        <h5 className="h">FAQ</h5>
        <h1  className="h">Frequently Asked Questions</h1>
        <p className='h' style={{ fontSize: "20px", width: "81%", margin: "auto" }}>Frequently Asked About car Rental Booking process on Our Website Answer to Common Concerns and inquires</p>
      </div>
      <div className='Second'>
        {items?.map((item, index) => (
          <div key={item.title}>
            <button style={{ fontSize: "20px",fontFamily: " 'Markazi Text', serif" }} onClick={() => handleClick(index)}>{item.title}<img style={{width:'2%',display:"inline",marginLeft:"20px",color:"black"}} src={arrow} alt="something"/></button>
            {index === activeindex && <p style={{fontSize:"15px",width:"50%",margin:"1rem auto"}}>{item.content}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq