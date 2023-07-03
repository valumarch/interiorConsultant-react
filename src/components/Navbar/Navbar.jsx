import React from 'react';
import MaterialIcon, {Menu, Close} from 'material-icons-react';
import { useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () =>{
        navRef.current.classList.toggle("active");
    }

  return (
    <header>
        <h1 className="logo">This interior</h1>
        <nav ref={navRef}>
            <a href="#" className="current">Home</a>
            <a href="#">Collection</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <button className="navBtn closeBtn" onClick={showNavbar}>
            <MaterialIcon icon="close" color="#fff" />
            </button>
        </nav>
        <button className="navBtn" onClick={showNavbar}>
            <MaterialIcon icon="menu" color="#fff" />
        </button>
    </header>
  )
}

export default Navbar