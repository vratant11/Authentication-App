import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
      <div className='container'>
         <div className='menu'>            
             <ul className='nav'>
                 
                 <li>
                 <a href="#">Home</a>  
                 </li>
                 <li>
                 <a href="#">Dashboard</a>
                 </li>
                 <li>
                 <Link to="/">Logout</Link>
                 </li>
             </ul>
         </div>
         <div className='app-wrapper1'>
             <p className='animate'>Welcome To</p>
             <p className='animate'>Home Page</p>
             <p className='txt'>Team CSI</p>
         </div>
         
      </div>
);
};

export default Home;
