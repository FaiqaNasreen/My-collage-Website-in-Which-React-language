
import React from 'react';
import './../style/header.css';
import { useState, useEffect, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
//import MainBody from '../MainBody';

function Headers() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
   <header className="header">
    <div className={`custom-dropdown-menu${isOpen ? ' open' : ''}`} ref={dropdownRef}>
      <Dropdown className="d-inline mx-2" autoClose="outside">
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="custom-button">
       Home Page
        </Dropdown.Toggle>
         <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item href="/MainBody">Landing Page</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown></div>
    <div className={`custom-dropdown-menu${isOpen ? ' open' : ''}`} ref={dropdownRef}>
      <Dropdown onClick={toggleDropdown} className="d-inline mx-2" autoClose="inside">
     
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="custom-button">
         About US
        </Dropdown.Toggle>
       
        <Dropdown.Menu className="custom-dropdown-menu" >
          <Dropdown.Item href="/Orgaization">Orgaization</Dropdown.Item>
          <Dropdown.Item href="/Introduction">Introduction</Dropdown.Item>
          <Dropdown.Item href="/Facilities">Facilities Members</Dropdown.Item>
        </Dropdown.Menu>
     
      </Dropdown></div>
      <div className={`custom-dropdown-menu${isOpen ? ' open' : ''}`} ref={dropdownRef}>
      <Dropdown className="d-inline mx-2" autoClose="inside" >
        <Dropdown.Toggle id="dropdown-autoclose-inside" className="custom-button">
         Admissions
        </Dropdown.Toggle>
        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item href="/AdmissionSched">Admission Schedual</Dropdown.Item>
          <Dropdown.Item href="/FeeStructure">Fee Structure</Dropdown.Item>
          <Dropdown.Item href="/ApplyMethod ">How to Apply</Dropdown.Item>
          <Dropdown.Item href="/ApplyOnline">Apply Online</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown></div>
      <div className={`custom-dropdown-menu${isOpen ? ' open' : ''}`} ref={dropdownRef}>
      <Dropdown className="d-inline mx-2" autoClose="outside">
        <Dropdown.Toggle id="dropdown-autoclose-outside" className="custom-button">
         Importanat Links
        </Dropdown.Toggle>
         <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.Item href="/ImportantLinks">Important links</Dropdown.Item>
         </Dropdown.Menu>
      </Dropdown></div>
    </header>
    {/* <MainBody/> */}
    </>
  );

}

export default Headers;