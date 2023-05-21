// import React from 'react';

import React, { useState } from 'react';






import './Navbar.css';
import logo from '../Assets/isro.png';
import logo2 from '../Assets/nit.png';


const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  
  
  
  return (

    <>
      <div className="isr__navbar"></div>
      <div className="isr__navbar-elements">
      <nav >
       <div className='navbar'> <a href="https://www.isro.gov.in/">
          <img src={logo} alt="" className="logo1 d-inline rounded float-left img-fluid "  />
        </a>
        

        
          <h1 className='text-center title1'>Agartala Coastal Information System</h1>
        <a href="#">
          <img src={logo2} alt="" className='img-fluid logo1 rounded float-right'/>
        </a>
        </div>
        <h5 className='text-center ver'>version 1.0</h5>
        
      
    </nav>
    {/* menu bar */}
   

    

   
    

      </div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a class="navbar-brand text-info font-weight-bolder" href="/">
        
        <span className=""></span>
      </a>
      <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">


      <a className="nav-link text-info bt  mb dropdown " href="/contact">HOME</a>

        <a className="nav-link text-info bt mb btn-modal nav-link " href="#scrollspyHeading1">ABOUT THE PROJECT</a>

        <a href="#scrollspyHeading2" className="btn mb bt btn-sm btn-info nav-link text-white" >CONTACT US</a>



         </div>
    </nav>
    

   

   

    





    
       </>

       
       

      
    
  )
}

export default Navbar
