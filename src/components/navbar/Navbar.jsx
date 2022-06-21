import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
    const [navClassList, setNavClassList] = useState("")
    window.onscroll = () => {
        window.scrollY > 15 ? setNavClassList("sticky") : setNavClassList("")
    }
    return (
        <nav className={`navbar ${navClassList}`}>
            <img src="./logo.png" alt="newslogo" />
            <ul className="nav-links">
                <li className="nav-link"><NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : 'none')} >All</NavLink></li>
                <li className="nav-link"><NavLink to="/business" className={({ isActive }) => (isActive ? "active-link" : 'none')} >Business</NavLink></li>
                <li className="nav-link"><NavLink to="/technology" className={({ isActive }) => (isActive ? "active-link" : 'none')} >Technology</NavLink></li>
                <li className="nav-link"><NavLink to="/sports" className={({ isActive }) => (isActive ? "active-link" : 'none')} >Sports</NavLink></li>
            </ul>
            <img className="right-logo" src="./logo.png" alt="newslogo" />
        </nav>
    )
}

export default Navbar