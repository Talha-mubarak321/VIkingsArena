import React from 'react';

function Navbar() {
  return (
    <nav>
        <label className='logo'>  <div className='image'></div> <div className='name'> Vikings arena </div>  </label>
        
        <ul>
            <li> <a href="#"> Games </a></li>
            <li> <a href="#"> About </a></li>
            <li> <a href="#">  Sign in   </a></li>
            <li> <a href="#">  Sign up   </a></li>
        </ul>
    </nav>
  );
}

export default Navbar;
