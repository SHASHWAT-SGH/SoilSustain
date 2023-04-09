import React from "react";
import { useState } from "react";

export default function Card(props){

    const [imageSrc, setImageSrc] = useState(props.urlToImage==null || props.urlToImage===""?"../assets/default.jpg":props.urlToImage);
    const handleImageError = () => {
        setImageSrc("https://t3.ftcdn.net/jpg/04/70/04/24/360_F_470042466_r1oWxbKRtU4G9rX5q8Bs25RpcKcn7A1P.jpg");
      };

    const handleClick = (website)=>{
        window.open(website, '_blank');
    }

    return(
        <>
        <div className="projcard projcard-blue"  onClick={() => handleClick(props.website)}>
            <div className="projcard-innerbox">
                <img className="projcard-img" src={imageSrc} alt="" onError={handleImageError}/>
                <div className="projcard-textbox">
                    <div className="projcard-title">{props.author}</div>
                    <div className="projcard-subtitle">{props.title}</div>
                    <div className="projcard-bar"></div>
                    <div className="projcard-description">{props.description}</div>
                    <div className="projcard-tagbox">
                        
                        <span className="projcard-tag">Date: {props.publishedAt.slice(0,10)}</span>
                        <span className="projcard-tag">Time: {props.publishedAt.slice(12,19)}</span>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}