import React from "react";
import { useLocation } from 'react-router-dom';
import "../css/navbar.css"
import Lottie from "lottie-react";
import digging from "../lottie/digging.json";
import { Link } from "react-router-dom";

export default function Navbar({ children }){

    const location = useLocation();

    return(
        <>
        <header>
        <span className="lottie-container">
        <a href="/" className="logo"> <Lottie animationData={digging} loop={true} className="logo-lottie"/></a>
        </span>

        <div className="web-name">SOIL POLLUTION</div>
        
        <nav className="navbar">
            <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>Home</Link>
            <Link to="/CheckVegetation" className={location.pathname === '/CheckVegetation' ? 'active' : ''}>Check Vegetation</Link>
            <Link to="/Crop" className={location.pathname === '/Crop' ? 'active' : ''}>Crop Recomendation</Link>
            <Link to="/News" className={location.pathname === '/News' ? 'active' : ''}>News</Link>
    
        </nav>
    </header>
    {children}
    </>
    );
}