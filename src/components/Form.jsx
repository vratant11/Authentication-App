import React from 'react';
import {Routes,Route} from "react-router-dom";
import Signupform from './SignupForm';
import Loginpage from './Loginpage';
import Otpverification from './Otpverification';
import Forgotpassword from './Forgotpassword';
import Home from './Home';



const Form = () => {
  return( 
    <>
    <Forgotpassword/>
    </>
  );
};

export default Form;
