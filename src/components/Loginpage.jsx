import React,{useEffect,useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import validation from './validation';
import Axios from 'axios';

const Loginpage = () => {
    const navigate = useNavigate();
    const [dataIsCorrect,setDataIsCorrect] = useState(false);
    const[submitform,setSubmitform] = useState(false);
    const[data,setData]=useState({})
    
    const [values,setValues] = useState({        
        email:"",
        password:"",
    });
    const [errors,setErrors]=useState({});
    const handleChange =(event) => {
        setValues({
            ...values,[event.target.name]: event.target.value,
        })
        setDataIsCorrect(true);
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            setSubmitform(true);
        }
    },[errors]);
    async function handleFormSubmit (event)
    {
        event.preventDefault();
        setErrors(validation(values));
        
        const result = await fetch ("https://registrationloginapi.herokuapp.com/api/users/login",{
            method:'Post',
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            },

            body:JSON.stringify({
                email:values.email,
                password:values.password,
            })
            

        });
        
        const data=result.json();
        if(result.status === 400 || !data){
            window.alert("Invalid details")
            console.log("Invalid details");
        }
        else{
            navigate("/home");
        }   
    };
    
    

    
    
  return (<div className='container'>
     

      <div className='app-wrapper'>
      <div>
              <h2 className='title'>Login</h2>
          </div>
          <form className='form-wrapper'>
              <div className='Email'>
                  <h2>User ID</h2>
                  <input className='logininput'
                  type="text"  
                  placeholder='Enter user id'
                  name='email' 
                  value={values.email}
                  onChange={handleChange}/>
                  {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className='Password'>
                  <h2>Password</h2>
                  <input className='logininput' 
                  type="password" 
                  placeholder='Enter password' 
                  name='password' 
                  value={values.password}
                  onChange={handleChange}/>
                  {errors.password && <p className="error">{errors.password}</p>}
                  <div id='forget'>
                      <Link to= "/forgot" >Forgot password ?</Link>
                  </div>
                                
              </div>
              
              <div>
                  <button className='submit' onClick={handleFormSubmit}>Login</button>
              </div>
              <br/>
              <div>
                  <button className='submit' onClick={() =>{navigate("/signup")}}>Sign Up</button>
              </div>
          </form>
      </div>
      
  </div>);
};

export default Loginpage;
