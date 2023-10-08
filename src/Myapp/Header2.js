import React, { useState } from 'react';
import './style/header2.css'; // Import your custom CSS file

function Header2() {
  const [showDropdown, setShowDropdown]=useState(false);
  
  const toggleDrowpdown =()=>{
   setShowDropdown(!showDropdown);
  };
  return (
    <header className="header">
      <div className="logo">
        <img src='/logo4.png' alt='hi'/>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
   
      <div className="dropdown-button" onClick={toggleDrowpdown}>
      Login 
      {showDropdown ? (
        <div className='dropdown-content'>
        <a href='/src/Myapp/AboutUs.js'>Sighn In Form</a>
        <a href='#'>Organization structure</a>
        <a href='#'>Model Of Education</a>
        <a href='#'>Faculty Members</a>
        </div>
      ) : null }
    </div>
    
    </header>
  );
}

export default Header2;
