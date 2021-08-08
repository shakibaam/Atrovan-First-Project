// import React from 'react';
// import { useSelector } from 'react-redux';

// import { useDispatch } from 'react-redux';
// import {getLocations} from '../store/mapReducer'
// import { useEffect } from 'react';
// import {
//     withScriptjs,
//     withGoogleMap,
//     GoogleMap,
//     Marker,
//   } from "react-google-maps";

// const Location = () => {

//     const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//         <GoogleMap
//           defaultZoom={8}
//           defaultCenter={{ lat: -34.397, lng: 150.644 }}
//         >
//           <Marker
//             position={{ lat: -34.397, lng: 150.644 }}
//           />
//         </GoogleMap>
//       ));
//     return ( 
          
//           <MapWithAMarker
//             googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOa2w1IIC1mGEwQNtOZUETyZgdxryeebU&v=3.exp&libraries=geometry,drawing,places"
//             loadingElement={<div style={{ height: `100%` }} />}
//             containerElement={<div style={{ height: `400px` }} />}
//             mapElement={<div style={{ height: `100%` }} />}
//           />
//      );
//     // const dispatch = useDispatch();

//     // useEffect(() =>{

//     //     dispatch(getLocations());
    
//     //     });

//     // // const loading = useSelector(state => state.locations.loading)  
    
    
//     // return (  <div> load locations... </div>  );
// }
 
// export default Location;