import React from "react";
import "../css/landingPage.css"
import { useNavigate } from 'react-router-dom'

export default function LandingPage(){
    const navigate = useNavigate()
    return(
        <>
        <div className="landing-page">
            <video src={require("../assets/nature.mp4")} autoPlay muted loop/>
            <div className='overlay'></div>
            <div className='content'>
                <h1 className='text'>SOIL POLLUTION</h1>
                <p className='para'>"Healthy soil, thriving crops - a sustainable future for all."</p>
            </div>
            <div className='button'>
                <button className='button1' onClick={() => (navigate("/home"))}>EXPLORE MORE</button>
            </div>
        </div>
        </>
    );
}