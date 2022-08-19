import React, { useState } from 'react';
import '../styles/Navbar.css';
// import {slide as Menu} from 'react-burger-menu';

import { FaLinkedin, FaGithub, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';
//import { capitalizeFirstLetter } from '../../utils/helpers';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='mainContainer'>
      <div>
      </div>

      {/* Main Menu */}

      <ul className="menuContainer">
      <li>
          <Link to="Home"> Home </Link>
        </li>
        <li>
          <Link to="About"> About Me </Link>
        </li>
        <li>
          <Link to="Portfolio">Portfolio </Link>
        </li>
        <li>
          <Link to="Resume" >Resume </Link>
        </li>
        <li>
          <Link to="Contact" >Contact Me </Link>
        </li>
      </ul>


      {/* Hamburger Menu */}
      <div onClick={handleClick} className='hamburgerMenu'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>


      {/* Mobile Menu */}
      <ul>
        <li className={!nav ? 'hidden' : 'absolute'}>
        </li>
        <li>
          <Link onclick={handleClick} to="Home">Home</Link>
        </li>
        <li>
          <Link onclick={handleClick} to="About">About Me</Link>
        </li>
        <li>
          <Link onClick={handleClick} tp="Portfolio">Portfolio </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="Resume">Resume </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="Contact">Contact </Link>
        </li>
      </ul>



      {/*website links*/}
      <div className='links'>
        <ul>
          <li>
            <a className='links' href='https://github.com/msnaye'>Github <FaGithub /></a>
          </li>

          <li>
            <a className='links' href='/'>Facebook <FaFacebook /></a>
          </li>

          <li>
            <a className='links' href='https://www.linkedin.com/feed/'>Linkedin <FaLinkedin /></a>
          </li>

          <li>
            <a className='links' href='/'>Email <HiOutlineMail /></a>
          </li>

          <li>
            <a className='links' href='/'>Resume <BsFillPersonLinesFill /></a>
          </li>

        </ul>
      </div>
    </div>
  );


}


export default Navbar;
