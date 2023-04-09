import React, { useState, useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "../css/googleMap.css"

const MapContainer = (props) => {
  const [location, setLocation] = useState({ lat: null, lng: null });

  
  // console.log(`props:  ${props.formInputLocation.lat}`);

  const handleClick = (mapProps, map, clickEvent) => {
    const { latLng } = clickEvent;
    const lat = latLng.lat();
    const lng = latLng.lng();
    setLocation({ lat, lng });
    // console.log(`handleClick:  ${location.lat}`);
    props.onMapClick({ lat, lng })
  }


  useEffect(() => {
    if ("geolocation" in navigator && location.lat==null && location.lng==null) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          setLocation({ lat, lng });
          props.onMapClick({ lat, lng });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation rejected by user OR location is not null !!!");
    }
  } );


  return (
    
    <div className='mapContainer'>
    <Map
      google={props.google}
      zoom={14}
      onClick={handleClick}
      center={location}
      style={{ width: '100%', height: '100%', position: 'absolute'}}
    >
      {location.lat && location.lng &&
        <Marker position={location} /> 
      }
    </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);
