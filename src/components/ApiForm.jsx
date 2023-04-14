import React, { useEffect } from "react";
import { useState} from "react";
import "../css/apiForm.css";
import GoogleMap from "./GoogleMap";
import LoadingAnimation from '../components/LoadingAnimation';


export default function ApiForm(){

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },3000)

    },[])
    

    const [lat, setLat] = useState("");
    const [long, setLong] = useState("");

    const [data, setData] = useState([]);
    const [loadingForForm, setloadingForFormForForm] = useState(false);

    function handleMapClick({lat,lng}){
        setLat(lat);
        setLong(lng);
    }

    function handlesubmit (){
        setloadingForFormForForm(true);
        const config = {
            headers: {'x-api-key': "240e6f59d3bfa55c6b2c7ab8f156c84ab3083b827f777b8ea40d6b6734c1a0d1",
            'Content-type': "application/json"},
        };
    
          setTimeout(() => {
            // console.log(` handle submit from form: ${lat}`)
            fetch(`https://api.ambeedata.com/ndvi/latest/by-lat-lng?lat=${lat}&lng=${long}`, config)
            .then((response) => response.json())
            .then((json) => {setData([json.data[0].lat,json.data[0].lon,json.data[0].ndvi,json.data[0].evi,json.data[0].summary])})
            .catch((error) => console.log(error));
          }, 3000);

          setTimeout(() => {
            setloadingForFormForForm(false);
          }, 3000);
        
    }


    return (
        <>
        {loading&&<LoadingAnimation/>}
        {
            !loading &&
            
        <div className="api-form-main-div">
            <div className="api-form">
                <span className="span1">
                <label htmlFor="input-lat">Enter Latitude:</label>
                <input type="text" id="input-lat" onChange={(e)=>{setLat(e.target.value)}} className="input-txt" placeholder="00.000" value={lat}/>
                </span>
                <span>
                <label htmlFor="input-long">Enter Longitude:</label>
                <input type="text" onChange={(e)=>{setLong(e.target.value)}} id="input-long" className="input-txt" placeholder="00.000" value={long}/>
                </span>
                
                <input type="button" onClick={handlesubmit} value="Find Details" className="input-btn"/>

                {loadingForForm?(
                    <img src={require("../assets/loading1.gif")} alt="loading..." className="loding"/>
                ):
                <div className="result">
                    <div><span className="bold">Latitude:</span> {data[0]}</div>
                    <div><span className="bold">Longitude:</span> {data[1]}</div>
                    <div><span className="bold">NDVI:</span> {data[2]}</div>
                    <div><span className="bold">EVI:</span> {data[3]}</div>
                    <div><span className="bold">Summary:</span> {data[4]}</div>
                </div>
                }
                
            </div>

            {/* {console.log(` api: ${lat}`)} */}
            <GoogleMap onMapClick={handleMapClick}/>
        </div>
}
        </>
    );
}