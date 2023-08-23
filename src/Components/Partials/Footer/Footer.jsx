import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer-main'>
        <div>
         <p>© 2021 Hotel Overlook. Alle rettigheder forbeholdt.</p>   
        </div>
        <div>
            <FaTwitterSquare />
            <BsFacebook />
        </div>
        <div>
        <nav>
      <ul className="nav-ul">
        <li>
          <NavLink to="/" className="active-li">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/hotels" className="active-li">Hoteller & Destinationer</NavLink>
        </li>
        <li>
          <NavLink to="/rooms" className="active-li">Værelser</NavLink>
        </li>
        <li>
          <NavLink to="/reservations" className="active-li">Reservation</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="active-li">Login</NavLink>
        </li>
      </ul>
    </nav>
        </div>
    </footer>
  )
}

export default Footer