
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React , { useEffect }  from 'react';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { getLocations } from '../store/mapReducer';
import { useDispatch , useSelector } from 'react-redux';



const TestMap = () => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.locations.loading );
    
    
    useEffect(() =>{

      if(loading === true)

        dispatch(getLocations());
  
      }); 


  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor :[17, 46],
    popupAnchor : [3, -46]
});

 L.Marker.prototype.options.icon = DefaultIcon;
 const locations = useSelector(state => state.locations.locations);


  if(loading === true){return(
    <div>loading locations</div>

  );}

  else{
    return ( 
  
      <MapContainer  center={[34.59018051 , 50.83778152]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map(location =>
          
          <Marker position={[location.latitude[0].value, location.longitude[0].value]}>
          <Popup>
           [ {location.latitude[0].value} , {location.longitude[0].value}]
          </Popup>
        </Marker>
          )}

        
        
      </MapContainer> );
  }
 
}
 
export default TestMap;