import React from 'react';
import './Header.css';
import logo3 from '../Assets/bhuvan-logo.png'

const Header = () => {
  return (
    <>
    <div className='log'>
    
    <div class="wrapper">
        <div class="container main">
            <div class="row">
                <div class="col-md-6 side-image">
                   
                    <img src={logo3} className='imgh' alt=""/>
                    
                </div>
                <div class="col-md-6 right">
                     <div class="input-box">
                        <header>Enter log in details</header>
                        <div class="input-field">
                            <input type="text" class="input" id="email" required autocomplete="off"/>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field">
                            <input type="password" class="input" id="password" required/>
                            <label for="password">Password</label>
                        </div>
                        <div class="input-field">
                            <input type="submit" class="submit" value="Sign In"/>
                            
                        </div>
                        <div class="signin">
                            <span>Already have an account? <a href="#">Log in here</a></span>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
    </div>


    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <div id="scrollspyHeading1" className='adiv'>
    <p  className='about'>ABOUT THE PROJECT</p>
    <p className='ap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, voluptatum. 
        Fuga similique aut, et sequi consequatur perspiciatis ex perferendis asperiores facilis
        , fugiat harum omnis unde a cumque ratione neque ut! Quas, id.
         Velit dignissimos sit eos recusandae vitae quo sequi et nostrum dolores sed saepe, reiciendis 
         incidunt voluptates ipsam suscipit omnis consequatur! Ab harum possimus voluptatum quos ipsa rem voluptatem?</p>

  </div>
 
  
</div>
      
    </>
  )
}

export default Header
