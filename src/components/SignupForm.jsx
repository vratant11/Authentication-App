import React,{useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import validation from './validation';
import Axios from 'axios';
const Signupform = () => {
    const gender =["Male","Female"];
    const navigate = useNavigate();
    const [dataIsCorrect,setDataIsCorrect] = useState(false);
    const[submitform,setSubmitform] = useState(false);
    const url ="https://registrationloginapi.herokuapp.com/api/users/register"
    const [values,setValues] = useState({
        name:"",
        rollno:"",
        phone:"",
        email:"",
        address:"",
        password:"",
        gen:"",
        year:"",
        branch:"",
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
    const handleFormSubmit = (event) => {
        console.log(values)
        event.preventDefault();
        setErrors(validation(values));
        Axios.post(url,
            {
            name: values.name,
            rollno: values.rollno,
            email: values.email,
            password: values.password,
            address: values.address,
            phone: values.phone,
            gen: values.gen,
            year:values.year,
            branch:values.branch,
        })
        .then(res=>{
            console.log(res.data)
        })
        Axios.post("https://registrationloginapi.herokuapp.com/api/users/otp-send",
            {

            email: values.email,
        })
        .then(res=>{
            console.log(res.data)
        })
        
        
    }
    
  return (<div className='container'>
      <div className='app-wrapper'>
          <div>
              <h2 className='title'>Sign up</h2>
          </div>
          <form className='form-wrapper'>
              <div className='name'>
                  <input className='input' 
                  type="text"  
                  placeholder='Name'
                  name='name' 
                  value={values.name}
                  onChange={handleChange}/>
                  {errors.name && <p className="error">{errors.name}</p>}
                  

              </div>
              <div className='Year'>
                  
                  <select  name="year" value={values.year} onChange={handleChange} >
                      <option value="Year">Year</option>
                      <option value="1 ">1 </option>
                      <option value="2 ">2 </option>
                      <option value="3 ">3 </option>
                      <option value="4 ">4 </option>
                  </select>
                  
                  
              </div>

              <div className='Roll'>
                  <input className='input' 
                  type="text" 
                  placeholder='University Roll NO.' 
                  name='rollno' 
                  value={values.rollno}
                  onChange={handleChange}/>
                  {errors.rollno && <p className="error">{errors.rollno}</p>}
                  <div className="radio">
                      {gender.map(result=>(
                          <>
                              <input type="radio" value={result} name="gen" onChange={handleChange}/>
                              <b>{result}</b>
                              </>
                      ))}
                  </div>
                                   
              </div>
              <div className='contact'>
                  <input className='input' 
                  type="text" 
                  placeholder='Contact' 
                  name='phone' 
                  value={values.phone}
                  onChange={handleChange}/>
                  {errors.phone && <p className="error">{errors.phone}</p>}
                  </div>
              <div className='Branch'>
                  
                  <select id='Branch' name="branch" value={values.branch} onChange={handleChange}>
                      <option value="Branch">Branch</option>
                      <option value="CSE">CSE</option>
                      <option value="CS">CS</option>
                      <option value="CSE AI and ML">CSE AI and ML</option>
                      <option value="CSE DS">CSE DS</option>
                      <option value="IT">IT</option>
                      <option value="ECE">ECE</option>
                      <option value="ME">ME</option>
                  </select>
                  
                  
              </div>
              <div className='Email'>
                  
                  <input className='input' 
                  type="text" 
                  placeholder='Email' 
                  name='email' 
                  value={values.email}
                  onChange={handleChange}/>
                  {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className='Address'>
                  
                  <input className='input' 
                  type="text" 
                  placeholder='Address'
                  name='address' 
                  value={values.address}
                  onChange={handleChange}/>
                  {errors.address && <p className="error">{errors.address}</p>}
                  
              </div>
              <div className='Password'>
                  <input className='input' 
                  type="password" 
                  placeholder='Password' 
                  name='password' 
                  value={values.password}
                  onChange={handleChange}/>
                  {errors.password && <p className="error">{errors.password}</p>}
                  
              </div>
              <div>
                  <button className='submit' onClick={submitform ? navigate("/otp"): handleFormSubmit}>Sign Up</button>
              </div>
          </form>
      </div>

  </div>);
};

export default Signupform;
