import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Link to='/home'>Home</Link>
      <Link to='/user'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar
