import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import Loginpage from './Loginpage';
import validation from './validation';
import Axios from "axios";

const Forgotpassword = () => {
    let navigate = useNavigate();
    
    const [values,setValues] = useState({        
        email:"",
    
    });
    const [errors,setErrors]=useState({});
    const handleChange =(event) => {
        setValues({
            ...values,[event.target.name]: event.target.value,
        })
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        Axios.post("https://registrationloginapi.herokuapp.com/api/users/forgot-password",{

            email:values.email,
        })
        .then(res=>{
            console.log(res.data)
        })
        window.alert("Password  has been sent successfully");
               
    navigate("/");

    
    };

  return( 
  <div className='container'>
      <div className='app-wrapper'>
      <h2 className='title'>Forgot Password</h2>
      <h3>Your password will<br/> be sent to your <br/>registered UserId.</h3>
    
      <div className='Email'>
                  <h2>Enter UserId</h2>
                  <input className='forgotinput' 
                  type="text" 
                  placeholder='Confirm your UserId' 
                  name='email' 
                  value={values.email}
                  onChange={handleChange}/>
                  {errors.email && <p className="error">{errors.email}</p>}
                  
                                
        </div>
    
      <button className='submit' onClick={handleFormSubmit}>Redirect to <br/>Login Page</button>
      </div>

  </div>);
};

export default Forgotpassword;
