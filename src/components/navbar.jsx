import React from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/navbar.css"
import { resetValidate } from '../store/loginReducer';

const Navbar = () => {
    const validate = useSelector(state => state.login.validate );
    const dispatch = useDispatch
    

  const  handleLogOut  = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('refresh token');   
        window.location = '/login';
        dispatch(resetValidate({validate : false}));

    }
    return ( 

        <div>
        <ul>
       {!validate && <li><Link to="/login"><button>Login</button></Link></li>}
       {validate && <li><Link to="/home"><button  >Home</button></Link></li>}
       {validate && <li className="logout" ><Link  onClick={handleLogOut} to="" >< button >LogOut</button></Link></li>}
       {validate && <li className="map" ><Link to="/map"><button type="button"  >Map</button></Link></li>}
        
        </ul>
        </div>
     );
}
 
export default Navbar;