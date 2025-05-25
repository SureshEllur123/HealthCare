import React from 'react';
import '../styles/Header.css';
import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
import logo from "../assets/logo.jpg";
import avatar from "../assets/doctor.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Healthcare Logo" className="logo" />
        <h1 style={{color:"#4287f5"}}>Health<span style={{color:"#1a093b"}}>care.</span></h1>
      </div>
      <div className="header-center">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." disabled />
        </div>
      </div>
      <div className="header-right">
        <button className="create-appointment-button">
          <FiPlus className="plus-icon" />
          <span> Create Appointment</span>
        </button>
        <div className="notification">
          <FiBell />
          <span className="notification-badge">3</span>
        </div>
        <div className="user-profile">
          <img src={avatar} alt="User" className="avatar" />
          <span>Dr. Suresh Ellur</span>
        </div>
      </div>
    </header>
  );
};

export default Header;