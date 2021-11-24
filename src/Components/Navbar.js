import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = props => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/LeaderBoard">LeaderBoard</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li>Logout</li>
            </ul >
        </nav >
    )
}