import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <Link to='/'>
                    <span>Yo</span>Cast
                </Link>
            </div>
        </div>
    )
}

export default Navbar
