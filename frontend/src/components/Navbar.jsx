import React from 'react'
import "../styles/style_navbar.css"
import logo from "../assets/logo2.png"
const Navbar = () => {
  return (
    <>
     <div>
        <img src={logo} alt="Logo" className='logo'/>
            </div>
        <div className='navbar'>
            {/* */}
            <div className='nav-item'>
                <a href="/" className='nav-link' >Home</a>
            </div>

            <div className='nav-item'>
                <a href="/" className='nav-link' >Use Tool</a>
            </div>

            <div className='nav-item'>
                <a href="https://www.linkedin.com/in/hazsyl1/" className='nav-link' target='_blank'>LinkedIn</a>
            </div>

            <div className='nav-item'>
                <a href="https://github.com/hazsyl1" className='nav-link' target='_blank'>GitHub</a>
            </div>
        </div>
      
    </>
  )
}

export default Navbar