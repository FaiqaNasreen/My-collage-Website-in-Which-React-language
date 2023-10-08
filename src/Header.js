

import React, { useState } from 'react';
import './Myapp/style/header.css'; // Import your custom CSS file
import {FaBook, FaMale, FaRegAddressBook, FaRegAddressCard, FaSchool } from 'react-icons/fa'; // Example: Using the FontAwesome icon 


function Header() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
 const [showDropdown3, setShowDropdown3] =useState(false);
 const [showDropdown4, setShowDropdown4] =useState(false);
 const [showDropdown5, setShowDropdown5] =useState(false);
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };
  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };
  const toggleDropdown4 = () => {
    setShowDropdown4(!showDropdown4);
  };
  const toggleDropdown5 = () => {
    setShowDropdown5(!showDropdown5);
  };
 
  return (
    <header className="header">
      <div className="dropdown-butt" onClick={toggleDropdown1}>
      <div className='icon'>
      <FaRegAddressBook size={30} color="black" />
     </div>
     About Us
        {showDropdown1 ? (
          <div className="dropdown-cont">
          <a href="#" >Introduction</a>
        <a href='#'>Organization structure</a>
        <a href='#'>Model Of Education</a>
        <a href='#'>Faculty Members</a>
        <a href='#'>Collaboration</a>
          </div>
        ) : null}
      </div>
      <div className="dropdown-butt" onClick={toggleDropdown4}>
      <div className='icon'>
      <FaBook size={30} color="black" />
     </div>
     Admissions
        {showDropdown4 ? (
          <div className="dropdown-cont">
            <a href="#">Admission Schedual</a>
            <a href="#">Fee Structure</a>
            <a href="#">Prospectus</a>
            <a href="#">How to Apply</a>
            <a href="#">Apply Online</a>
            <a href="#">Recent Advertisements</a>
            <a href="#">Admitted Candidates List</a>
          </div>
        ) : null}
      </div>
      <div className="dropdown-butt" onClick={toggleDropdown2}>
      <div className='icon'>
      <FaMale size={30} color="black" />
     
      </div>
      Students
        {showDropdown2 ? (
          <div className="dropdown-cont">
            <a href="#">Lacture Schedule</a>
            <a href="#">Academic Calendar</a>
            <a href="#">LMS Login</a>
            <a href="#">Students Handbook</a>
            <a href="#">Bookshop</a>
            <a href="#">Scholarships</a>
            <a href="#">Life at Vu</a>
          </div>
        ) : null}
      </div>
      <div className="dropdown-butt" onClick={toggleDropdown3}>
      <div className='icon'>
      <FaSchool size={30} color="black" />
     </div>
     Virtual Campuses
        {showDropdown3 ? (
          <div className="dropdown-cont">
            <a href="#">Virtual campuses</a>
            <a href="#">Become a Vu Camus</a>
            <a href="#">PVC Rules</a>
          </div>
        ) : null}
      </div>
      <div className="dropdown-butt" onClick={toggleDropdown5}>
      <div className='icons'>
      <FaRegAddressCard size={30} color="black" /></div>
       Important Links
        {showDropdown5 ? (
          <div className="dropdown-cont">
            <a href="#">Protection against Harrassment</a>
            <a href="#">Citizen Portal/VU Complaint Handling</a>
            <a href="#">Right of Access to Information</a>
            <a href="#">ORIC</a>
            <a href="#">Degree/Transcript Verification</a>
            <a href="#">More Links</a>
            <a href="#">Student Start-Up Business Center</a>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
