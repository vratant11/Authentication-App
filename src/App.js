import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";
import Loginpage from './components/Loginpage';
import Home from './components/Home';
import Signupform from './components/SignupForm';
import Forgotpassword from './components/Forgotpassword';
import Otpverification from './components/Otpverification';
const App = () => {
  return(
  <Router>
  <Routes>
  <Route path="/" element={<Loginpage/>} />
  <Route path="/forgot" element={<Forgotpassword/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/signup" element={<Signupform/>} />
    <Route path="/otp" element={<Otpverification/>} />
  </Routes>
  </Router>);
};

export default App;  
