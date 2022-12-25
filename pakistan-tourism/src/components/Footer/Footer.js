import * as React from "react";  

import facebok from "../../assest/icons/facebook.png"; 
import twitter from "../../assest/icons/twitter.png"; 
import Instagram from "../../assest/icons/instagram.png"; 

import email from "../../assest/icons/email.png"; 
import phone from "../../assest/icons/phone.png"; 
import location from "../../assest/icons/location.png"; 
import "./StyleSheet.css"

export function Footer() {
  return ( 
<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Pakistan Tourism Council</h1>
        
    <h2>"The thing about tourism is that <br/>
      the reality of a place is quite<br/>
     different from the mythology of it"</h2>


     <h2>- Martin Parr</h2>
    
 
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Social Media</h2>

      <ul class="nav__ul">
        <li>
          <img  src ={facebok} height="12px" width="12px"></img>
          <a href="#">&nbsp;Facebook</a>
        </li>

        <li>
          
        <img  src ={twitter} height="12px" width="12px"></img>
          <a href="#">&nbsp;Twitter</a>
        </li>
            
        <li>

        <img  src ={Instagram} height="12px" width="12px"></img>
          <a href="#">&nbsp;Instagram</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item  ">
      <h2 class="nav__title">Contact</h2>
      
      <ul class="nav__ul  ">
        <li>
          <img  src ={location} height="12px" width="12px"></img>
          <a href="#">&nbsp;Islamabad, Pakistan</a>
        </li>
        
        <li>
          <img  src ={phone} height="12px" width="12px"></img>
          <a href="#">&nbsp;+92 051 1234567</a>
        </li> 
        
        <li>
          <img  src ={email} height="12px" width="12px"></img>
          <a href="#">&nbsp;Test@gmail.com</a>
        </li>
         
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
   
  </div>
</footer> 
  );
}
