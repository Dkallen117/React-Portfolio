import React, { Component } from 'react';
import '../assets/css/style.css'
import metatronPic from  '../assets/images/metatrons-cube.png'
import refactorPic from '../assets/images/Screenshot1.jpg'
import snarfPic from  '../assets/images/snarf.jpg'
import stockScanner from '../assets/images/Stock-Scanner.jpg'
import weatherPic from '../assets/images/WeatherPic.png'

export default class Porfolio extends Component {
  render() {
  
    return (

<section class="container"   id="main-Section">
<section class="d-flex justify-content-around ml-4">

  <div class="shape d-flex flex-column justify-content-center align-items-center">
    
   <i class="fas fa-database fa-2x"></i>
   <h2>Back End</h2>
   <p class="text-center"> Database Architecture and MySQL</p>

  </div>

  <div class="shape d-flex flex-column justify-content-center align-items-center">
    
   <i class="fab fa-bootstrap fa-2x"></i>
   <h2>Front End</h2>
   <p class="text-center"> Creatively Designed, Intuitively Driven </p>

  </div>

  <div class="shape d-flex flex-column justify-content-center align-items-center">
    
   <i class="fas fa-bug fa-2x"></i>
   <h2>QA Testing</h2>
   <p class="text-center"> Integration Testing // Jest </p>

  </div>

  <div class="shape d-flex flex-column justify-content-center align-items-center">
    
   <i class="fas fa-code-branch fa-2x"></i>
   <h2>Source Control</h2>
   <p class="text-center"> Scrum Master and Team Player </p>

  </div>
  
 </section>

 <div class = "container">
 <div class="row">
  <div class="col-md-3 col-sm-6">
      <div class="progress blue">
          <span class="progress-left">
              <span class="progress-bar"></span>
          </span>
          <span class="progress-right">
              <span class="progress-bar"></span>
          </span>
          <div class="progress-value">90%</div>
      </div>
  </div>
</div> 
</div> 
  <h1 class="wow slideInLeft mt-2" data-wow-offset="500" id="work-Title">Work</h1>
          
    <div class="row row-cols-1 row-cols-md-2">

      <div class="col-md-4 col-sm-12 mb-4">

       
        <div class="card animated fadeInUp text-center">
                          
          <div class="bg-image hover zoom">
          <a href="https://dkallen117.github.io/StockScanner/" target="_blank" rel="noreferrer">
          <img class="card-img-top img-fluid" id="stock-Scanner-Photo" src = {stockScanner} alt="Stock Scanner"></img>
          </a>     
          </div>
          <div class="mask rgba-white-slight"></div>
          </div>
                        
          <div class="card-body">
                     
           <h4 class="card-title">Stock Scanner</h4>               
            <p class="card-text">Click the image to be taken to my first team-based website
                                 utilizing two different APIs.</p>
             <a href="https://github.com/Dkallen117/StockScanner" target="_blank" rel="noreferrer">
             <button type="button" class="btn blue-gradient btn-lg">GitHub Respository</button>
              </a>
                
          </div>
          
        </div>
            
      


      <div class="col-md-4 col-sm-12 mb-4">

       
        <div class="card animated fadeInUp text-center">
          
          <div class="bg-image hover zoom">
          <a href="https://prezi.com/dwii7bnwk3rz/team-everybody-loves-snarf/" target="_blank" rel="noreferrer">
          <img class="card-img-top" src = {snarfPic}
               alt="Snarf">
          </img>
          <div class="mask rgba-white-slight"></div>
          </a>
              
          <div class="card-body">
      
           <h4 class="card-title">Video Game Studio Prezi Presentation</h4>
                  
            <p class="card-text">Click the image to be taken to a team-based prezi presentation 
            for a fictional video game studio! (Image Credit: Jason Velazquez // 
            <a href="https://dribbble.com/shots/1453837-Snarf-minimal-vector-drawing-ThunderCats" target="_blank" rel="noreferrer">Image Link</a>)</p>
                
           </div>
          
        </div>
            
       </div>
              </div>
       <div class="col-md-4 col-sm-12 mb-4">
             
      
        <div class="card animated fadeInUp text-center">
          
         <div class="bg-image hover zoom">
          <a href="https://www.youtube.com/watch?v=WM8Mky99coE" target="_blank" rel="noreferrer">
          <img class="card-img-top" id="meta-Cube-Photo" src = {metatronPic} alt="Metatrons Cube">
              
         </img>
         <div class="mask rgba-white-slight"></div>
         </a>
              
          <div class="card-body">
          
           <h4 class="card-title">Metatron's Cube YouTube Video</h4>
                 
            <p class="card-text">Click the image to be taken to a YouTube video of my teams fictional video game
                                 pitch to a fictional game studio.</p>
                  
          </div>
          
        </div>
            
       </div>
       </div>
       <div class="col-md-4 col-sm-12 mb-4" id="weather-Card">
             
      
         <div class="card animated fadeInUp text-center">
          
          <div class="bg-image hover zoom">
           <img class="card-img-top img-fluid" id="code-Refractor-Photo" src = {weatherPic} alt="Weather"></img>
                
          </div>
          <a href="#!">
          <div class="mask rgba-white-slight"></div>
          </a>
              
            <div class="card-body">

             <h4 class="card-title">Weather Dashboard</h4>
                  
               <p class="card-text">Click the image to be taken to a daily and 5-day forecast Weather Dashboard 
                                    application.
               </p>

               <a href="https://github.com/Dkallen117/weather-Dashboard" target="_blank" rel="noreferrer">
               <button type="button" class="btn blue-gradient btn-lg">GitHub Respository</button>
               </a>
          
            </div>
          
           </div>
           
         </div>

         <div class="col-md-4 col-sm-12 mb-4"  id="code-Card">
             
          
          <div class="card animated fadeInUp text-center">

           <div class="bg-image hover zoom">
            <img class="card-img-top img-fluid" id="code-Refractor-Photo" src = {refactorPic} alt="Code Refractor"></img>
                 
           </div>
           <a href="#!">
           <div class="mask rgba-white-slight"></div>
           </a>

            <div class="card-body">

             <h4 class="card-title">Code Refracting</h4>
                  
              <p class="card-text">Click the image to be taken to the first website I practiced code refractoring.</p>

               <a href="https://github.com/Dkallen117/code-Refractor" target="_blank" rel="noreferrer">
               <button type="button" class="btn blue-gradient btn-lg">GitHub Respository</button>
               </a>
          
            </div>
          
           </div>
           
          </div>
          
          </div>       
   
   </section>
        );
  }
}