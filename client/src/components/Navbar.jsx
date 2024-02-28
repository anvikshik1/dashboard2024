import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import { useAuth } from '../store/auth';


const Navbar = () => {
    const {isLoggerIn} = useAuth();
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
                        <li><NavLink to='/'>Contact</NavLink></li>
                        <li><NavLink to='/service'>Service</NavLink></li>
                        {isLoggerIn?
                        <>
                            <li><NavLink to='/registration'>Registration</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                        </>
                        : 
                        <>
                            <li><NavLink to='/logout'>Logout</NavLink></li>
                        </>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Navbar;