import React from 'react';
import "../styles/login.css";
import { login } from '../store/loginReducer';
import { useDispatch , useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { resetValidate } from '../store/loginReducer';


const Login = (props) => {

    const validate = useSelector(state => state.login.validate );
    const dispatch = useDispatch();

    // useEffect(() =>{
       
    //     if(validate === true){
    //         dispatch(resetValidate({validate : false}));
    //     }
  
    //   });

   
    let username = "";
    let password = "";

    const handleChangeUsername = (e) =>{

        username=e.target.value;
        
}

     const handleChangePassword = (e) =>{
         password=e.target.value;
        
    }

    const handleSubmit = async (e) =>{

        e.preventDefault();

        console.log("user and pass " , username , password);
       
        await dispatch(login(username , password));
        props.history.push("/home");
       

          
         }

    return ( 

        <div className="loginDiv" >
            <form   action="">
            <div className="container">
                <label htmlFor="username"><b>Username</b></label>
                <input  onChange={handleChangeUsername}  type="text" placeholder="Enter Username" name="username" required></input>

                <label htmlFor="password"><b>Password</b></label>
                <input  onChange={handleChangePassword} type="password" placeholder="Enter Password" name="password" required></input>

                <button onClick={handleSubmit} type="submit" >Login</button>


            </div>
        </form>
        </div>

        
     );
}
 
export default Login;