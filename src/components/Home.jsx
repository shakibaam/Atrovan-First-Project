import React , {useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';

import { getDeviceFromApi } from '../store/HomeReducer';

import '../styles/Home.css'



const Home = () => {

     const dispatch = useDispatch();
     const loading = useSelector(state => state.devices.loading );
     

    useEffect(() =>{
      if(loading===true)

        dispatch(getDeviceFromApi());

    });

  

   const devices = useSelector(state => state.devices.devices );
   console.log(devices);
   

//deviceProfileName
 
    return ( 
        
       
        <div className="flex-container">
          { devices && devices.map(device =>
            
            <div key={device.name}>
              <p>{device.name}</p>
              <p>{device.type}</p>
                
            
            </div>

            )}
        </div>
        
          
     );
}
 
export default Home;