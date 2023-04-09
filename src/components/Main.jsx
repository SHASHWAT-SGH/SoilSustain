import React from "react";
import "../css/main.css"
import Lottie from "lottie-react";
import malelottie from "../lottie/male-radio-host-interviewing-female-guest-on-radio.json";
import femalelottie from "../lottie/female-radio-host-interviewing-male-guest-on-radio.json";
import nature from "../lottie/nature.json";
import wave from "../lottie/bk-wave.json";
import LoadingAnimation from '../components/LoadingAnimation';
import { useState } from "react";

import { useRef, useEffect} from "react";
import Typed from 'typed.js'

export default function Main(){

    const [loading, setLoading] = useState(true);

    const el = useRef('');

    useEffect(() => {

        setTimeout(()=>{
            setLoading(false);
        },1500)

        if(!loading){
        const typed = new Typed(el.current, {
            strings: ['"We are a planet......"',
                '"We are a planet. At the crossroads"',
                '"Now more than ever."',
                '"Our planet needs our help...."',
                '"We have the tools it takes..."',
                '"We have the tools it takes to make a real difference."',
                '"Now is the time...."',
                '"Now is the time to be bold"',
                '"Together..."'


            ],
            typeSpeed: 30,
            smartBackspace: true,
            startDelay: 1000,
            shuffle: false,
            loop: true,
            loopCount: Infinity,
            backSpeed: 40
        })

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }
    });

    return(
        <>
        {loading&&<LoadingAnimation/>}
        {
            !loading &&<div className="home">
            <div className="home-hero-nature">
                <Lottie animationData={nature} loop={true} className="nature"/>
                <div className="div-wave">
                    <Lottie animationData={wave} loop={true} className="wave"/>
                </div>
                <div className="text-heading">
                    A Step Towards <span>Conserving Soil</span>
                </div>
                <div className="text" ref={el}/>
            </div>

            <div className="soil-pollution-details home-page-main-div">
                
                <div className="background">
                    <Lottie animationData={malelottie} loop={true} className="backgroundLottie"/>
                </div>
                <div className="top-content">
                   <div>
                        <h3>What Is Soil Pollution? Let's Discuss</h3>
                        <p>
                        Soil pollution refers to the presence of toxic chemicals or contaminants in the soil that can have adverse effects on human health, plant growth, and the health of other organisms that depend on the soil. The contamination of soil can occur due to various factors, such as industrialization, urbanization, agriculture, mining, and improper waste disposal.
                        </p>
                    </div>
                </div>
            </div>

            <div className="save-soil home-page-main-div">
                
                <div className="background">
                    <Lottie animationData={femalelottie} loop={true} className="backgroundLottie"/>
                </div>
                <div className="top-content">
                   <div>
                        <h3>Let's Take A Pledge To Save Soil!</h3>
                        <p>
                        Soil is a crucial natural resource that plays a vital role in sustaining life on earth. It is the foundation for plant growth and a primary source of nutrients for food crops. Additionally, soil acts as a filter, purifying water and air that we depend on for our survival. Therefore, protecting and conserving soil is essential for maintaining the health and well-being of our planet and the organisms that inhabit it.
                        </p>
                    </div>
                </div>
            </div>
            

        </div>}
        </>
    );
}
