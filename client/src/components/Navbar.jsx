import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <header>
            <div className='container'>
                <div className='logo-name'>
                    <NavLink to='#'>Harinath</NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li><NavLink to='/service'>Service</NavLink></li>
                        <li><NavLink to='/registration'>Registration</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar;