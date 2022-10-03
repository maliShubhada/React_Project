
import React, { useEffect } from "react";
import react,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import '../styles/Navbar.css'
function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick=()=>setClick(!click); 
    const closeMobileMenu=()=>setClick(false);
    const navigate=useNavigate('')
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    const LogOutToHome=()=>{
      navigate('/products')
    }
    useEffect(()=>{
        showButton();
    },[])
    window.addEventListener('resize',showButton)
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            TRVL<i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
           <i className={click?"fas fa-times":"fas fa-bars"}/>
          </div>
          <ul className={click?"nav-menu active":"nav-menu"} >
           <li className="nav-item">
            <Link to='/' className="nav-links" onClick={closeMobileMenu}>Home</Link>
           </li>
           <li className="nav-item">
            <Link to='/services' className="nav-links" onClick={closeMobileMenu}>Services</Link>
           </li>
           <li className="nav-item">
            <Link to='/products' className="nav-links" onClick={closeMobileMenu}>Offers</Link>
           </li>
           <li className="nav-item">
            <Link to='/sign-up' className="nav-links" onClick={closeMobileMenu}>sign Up</Link>
           </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={LogOutToHome}>Log Out</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
