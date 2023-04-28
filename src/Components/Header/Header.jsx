import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="leftContainer">
            <img src="https://assets.stickpng.com/images/5841c471a6515b1e0ad75aa2.png" alt="" />
            <div className="liContainer">
                <li>Platform</li>
                <li>Plans</li>
                <li>Enterprise</li>
                <li>Resources</li>
                <li>Education</li>
            </div>
        </div>
        <div className="rightContainer">
            <p>Contact Us</p>
            <p>Login</p>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Header