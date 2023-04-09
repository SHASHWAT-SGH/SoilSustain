import React from "react";
import "../css/news.css"
import Card from "./Card";
import {cardData} from"../assets/soilNews.js"

const cardComponent = ()=>{
    return(
        <>
            <div className="projcard-container">
                {cardData.articles.map((i,index)=>(
                    <Card key={index} author={i.author} title={i.title} description={i.description} urlToImage={i.urlToImage} publishedAt={i.publishedAt} website={i.url}/>
                ))}
            </div>
        </>
    );
}


export default function News(){
    return(
        <>
        <div className="news-container">
            {cardComponent()}
        </div>
        </>
    );
}