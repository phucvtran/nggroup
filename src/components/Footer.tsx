import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleMap, LoadScript, Circle } from "@react-google-maps/api";



const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 47.6101, // Replace with your desired center latitude
  lng: -122.2015, // Replace with your desired center longitude
};



function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="footer">
      <div className='information-container'>
        <div className='info-title'>
          <h1>Information</h1>
        </div>
        <div className='services'>
          <h2>Service Areas:</h2>
          <ul>
            <li>Seattle</li>
            <li>Tacoma</li>
            <li>Everett</li>
            <li>Bellevue</li>
            <li>Renton</li>
            <li>Auburn</li>
            <li>Burien</li>
            <li>Federal Way</li>
          </ul>

          <div className='info'>
            <h3 className='phone'>+1 (253) 740-4231</h3>
            <h3>ngcleaning@gmail.com</h3>
          </div>
          
        </div>


      </div>
      <div className='map-container'>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY + ''}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
            <Circle
              center={center}
              radius={50000} // Radius in meters
              options={{
                strokeColor: "#0080FF",
                strokeOpacity: 0.6,
                strokeWeight: 2,
                fillColor: "#0080FF",
                fillOpacity: 0.35,
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </div> 
    
  );
}
export default Header;