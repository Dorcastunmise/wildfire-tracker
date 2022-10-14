import React from "react";
import GoogleMapReact from 'google-map-react';


const Map = () => {
    const defaultProps = {
        center: {
            lat: 42.3265,
            lng: -122.8756
        },
        zoom: 6
    }; 
  return (
    <div className='map' style={{ height: '100vh', width: '100%' }}>
         <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBPXZFFQc05ScvAX6UfIMeGKo6XJJS49sw" }}
        defaultCenter={ defaultProps.center }
        defaultZoom={ defaultProps.zoom }
      >
      </GoogleMapReact>
    </div>
  );
  
}
 
export default Map;


