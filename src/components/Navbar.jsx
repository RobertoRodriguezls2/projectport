import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav'>
        <Link to={'/'}>
            <span className='top'>
                Projects
            </span>
        </Link>
    </div>
  )
}
