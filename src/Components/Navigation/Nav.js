import { Link } from 'react-router-dom'
import logo from './Car rental.png';
import './Nav.css'
import { useState } from 'react';
const Nav = () => {
  const [click, setClick] = useState(false);
  const toggle = (click) => {
    if (click) {
      click = false;
    }
    else {
      click = true;
    }
    return click;
  }
  return (
    <>
      <div className='header'>
        <nav>
          <ul className={click ? 'nava' : 'Navigation'}>
            <div className='logo'>
              <img src={logo} alt='some' width={"80px"} height={"80px"} />
            </div>
            <div className='center'>
              <Link to='Rentalcar' className='Link'>Home</Link>
              <Link to='/about' className='Link'>About</Link>
              <Link to='/contact' className='Link'>Contact Us</Link>
              <Link to='/bookingform' className='Link'>Bookcar</Link>
            </div>
            <div className='right'>
              <Link to='/signin' className='Link'>SignIn</Link>
              <Link to='/Register' className='Link'>Register</Link>
            </div>
          </ul>
        </nav>
        <div className="burger" onClick={() => setClick(toggle)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </>
  )
}

export default Nav