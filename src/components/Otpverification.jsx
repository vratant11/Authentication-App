import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';




const Otpverification = () => {
    let navigate = useNavigate();
    const getRegisterInfo = async() => {
    
        try{
            
            let url= "https://registrationloginapi.herokuapp.com/api/users/register"
            let res= await fetch(url);
            let data = await res.json();
            //console.log(( data ).length);
            var a=data.length;
            const{otpuser} = data[(a-1)];
            
            
    
            const myotp = otpuser;
           // console.log(myotp);
            if(myotp=== otp.join("") ){
                navigate("/home");
            }
            else{
                window.alert("invalid otp")
            }
    
        }catch(error){
            console.log(error);
        }
    
        
    } 

    



    const [otp,setOtp]= useState(new Array(6).fill(""))
    
    const handleChange =(element,index) =>{
        if(isNaN(element.value)) return false;
        setOtp([...otp.map((d,idx)=>(idx === index) ? element.value : d)]);

        if(element.nextSibling){
            element.nextSibling.focus();
        }
        
    };
    
    
  return (<div className='container'>
      <div className='app-wrapper'>
      <h2 className='title'>OTP Verification</h2>
      <h3>Enter the OTP sent to  </h3>
      <h3>registered email</h3>
      <div className='name'>
          {
              otp.map((data,index) =>{
                  return(
                    <input className='inputnum'
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}   
                    value={data}
                    onChange={e=>handleChange(e.target,index)}
                    onFocus={e=> e.target.select()}
                    />
                  );
              })}
              
        
          
          
          <div id='forget'>
                      <Link to= "/forgot">Resend Otp?</Link>
                  </div>
      </div>
    
      <button className='submit' onClick={getRegisterInfo}>Verify and Proceed</button>
      </div>
  </div>);
};

export default Otpverification;