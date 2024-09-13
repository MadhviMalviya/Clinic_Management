import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <h1>LifeCare</h1>
                </div>

                <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox" />
                <label htmlFor="hamburger-checkbox" className="hamburger">&#9776;</label>

                <div className="nav-items">
                    <ul >
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/doctors'>  <li>Doctors</li></Link>
                        <Link to='/dashboard'>  <li>Dashboard</li></Link>
                        <Link to='/about'>   <li>About</li></Link>
                    </ul>

                    <ul className='nav-btn' >
                        <Link to='/login'><li> <button>Login</button></li></Link>
                        <Link to='/signup'>  <li> <button>Signup</button></li></Link>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar