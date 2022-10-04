// import React from 'react';

const validation = (values) => {
    let errors={};
    if(!values.name){
        errors.name="Name is required."
    }
    if(!values.rollno){
        errors.rollno="Roll no. is required."
    }
    if(!values.phone){
        errors.phone="Contact is required."
    } else if(values.phone.length < 10 || values.phone.length > 10){
        errors.phone="Contact should be of 10 digits."
    }
    if(!values.email){
        errors.email="Email is required."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }
    if(!values.address){
        errors.address="Address is required."
    }
    if(!values.password){
        errors.password="Password is required"
    }else if(values.password.length < 5){
        errors.password="Password must be greater than 5 digits."
    }
    
  return errors;
};

export default validation;
