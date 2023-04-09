import React from "react";
import loadingAnimatiion from "../lottie/loadingAnimation.json";
import Lottie from "lottie-react";
import "../css/loadingAnimation.css"

export default function LoadingAnimation(){
    return(
        <div className="LoadingAnimation">
            <Lottie animationData={loadingAnimatiion} loop={true} className="loading-ani"/>
        </div>
    );
}