import React from 'react';
import DarkModeToggle from './DarkModeToggle'
const Navbar = () => {
  return(
    <header>
      <nav id='pageTop' className='navbar'>
        <h1 className='navbar__brand'>Movie Finder</h1>
        <DarkModeToggle/>
      </nav>
     
    </header>
  )
}

export default Navbar;