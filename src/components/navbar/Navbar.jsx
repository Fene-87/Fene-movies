import React from 'react';
import logo from '../../assets/FeneStudios.PNG';
import { faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-div">
        <img src={logo} alt="logo" className="logo"/>
        <div className="search-bar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
      </div>
      <ul className="nav-items">
        <li className="nav-link">Home<FontAwesomeIcon icon={faHouse} className="home-icon"/></li>
        <li className="nav-link">Movies</li>
        <li className="nav-link">TV Shows</li>
        <li className="nav-link">Coming Soon</li>
      </ul>
    </div>
  )
}

export default Navbar;
