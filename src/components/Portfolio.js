import React, { Component } from 'react';
import '../assets/css/style.css'
import metatronPic from '../assets/images/metatrons-cube.png'
import refactorPic from '../assets/images/Screenshot1.jpg'
import snarfPic from '../assets/images/snarf.jpg'
import stockScanner from '../assets/images/Stock-Scanner.jpg'
import weatherPic from '../assets/images/WeatherPic.png'
import ecommercePic from '../assets/images/e-commerce.png'
import bookSearchPic from '../assets/images/bookSearch.png'
import rpgPic from '../assets/images/rpg.png'

export default class Porfolio extends Component {
  render() {
    return (

      <section className="container-fluid" id="main-Section">
        {/* Abilities and Interests */}
        <h1 className="wow fadeInUp text-center my-5">About</h1>
        <hr className="wow fadeInUp mb-5" style={{ borderWidth: '10px', backgroundColor: '#00000099', color: '#FFFFFF', }}></hr>
        <h2 className="wow fadeInUp text-center my-5"> Abilities and Interests </h2>
        <section className="container-fluid ml-3" id="abilities-Interests">
          <div className="row d-flex justify-content-around ">


            <div className="shape d-flex flex-column justify-content-center align-items-center wow fadeInUp">
              <i className="fas fa-database fa-2x"></i>
              <h2>Back End</h2>
              <p className="text-center"> Database Architecture and MySQL</p>
            </div>

            <div className="shape d-flex flex-column justify-content-center align-items-center wow fadeInUp">
              <i className="fab fa-bootstrap fa-2x"></i>
              <h2>Front End</h2>
              <p className="text-center"> Creatively Designed, Intuitively Driven </p>
            </div>

            <div className="shape d-flex flex-column justify-content-center align-items-center  wow fadeInUp">
              <i className="fas fa-bug fa-2x"></i>
              <h2>QA Testing</h2>
              <p className="text-center"> Integration Testing // Jest </p>
            </div>

            <div className="shape d-flex flex-column justify-content-center align-items-center  wow fadeInUp">
              <i className="fas fa-code-branch fa-2x"></i>
              <h2>Source Control</h2>
              <p className="text-center"> Scrum Master and Team Player </p>
            </div>
          </div>
        </section>
        {/* Skills */}
        <div className="container my-5">
          <h2 className="text-center my-5 wow zoomIn"> Skill Set Knowledge </h2>
          <div className="row d-flex justify-content-around">

            <div className="col-md-3 col-sm-6 wow fadeInLeft">
              <div className="progress ninety">
                <span className="progress-left">
                  <span className="progress-bar wow"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar wow"></span>
                </span>
                <div className="progress-value">90%</div>
              </div>
              <h2 className="text-center my-4"> HTML </h2>
            </div>

            <div className="col-md-3 col-sm-6 wow fadeInUp">
              <div className="progress ninety">
                <span className="progress-left">
                  <span className="progress-bar wow"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar wow"></span>
                </span>
                <div className="progress-value">90%</div>
              </div>
              <h2 className="text-center my-4"> Microsoft VSC </h2>
            </div>

            <div className="col-md-3 col-sm-6 wow fadeInUp">
              <div className="progress seventyFive">
                <span className="progress-left">
                  <span className="progress-bar wow"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar wow"></span>
                </span>
                <div className="progress-value">75%</div>
              </div>
              <h2 className="text-center my-4"> JS </h2>
            </div>

            <div className="col-md-3 col-sm-6 wow fadeInRight">
              <div className="progress seventyFive">
                <span className="progress-left">
                  <span className="progress-bar wow"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar wow"></span>
                </span>
                <div className="progress-value">75%</div>
              </div>
              <h2 className="text-center my-4"> CSS </h2>
            </div>

            <div className="col-md-3 col-sm-6 my-5 wow fadeInLeft">
              <div className="progress sixty">
                <span className="progress-left">
                  <span className="progress-bar wow"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar wow"></span>
                </span>
                <div className="progress-value">60%</div>
              </div>
              <h2 className="text-center my-4"> QA Testing </h2>
            </div>

            <div className="col-md-3 col-sm-6 my-5 wow fadeInUp">
              <div className="progress sixty">
                <span className="progress-left">
                  <span className="progress-bar wow"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar wow"></span>
                </span>
                <div className="progress-value">60%</div>
              </div>
              <h2 className="text-center my-4"> React </h2>
            </div>

            <div className="col-md-3 col-sm-6 my-5 wow fadeInUp">
              <div className="progress fifty">
                <span className="progress-left">
                  <span className="progress-bar wow"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar wow"></span>
                </span>
                <div className="progress-value">50%</div>
              </div>
              <h2 className="text-center my-4"> Unity </h2>
            </div>

            <div className="col-md-3 col-sm-6 my-5 wow fadeInRight">
              <div className="progress fifty">
                <span className="progress-left">
                  <span className="progress-bar wow"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar wow"></span>
                </span>
                <div className="progress-value">50%</div>
              </div>
              <h2 className="text-center my-4"> C# </h2>
            </div>
          </div>
        </div>

        <h1 className="wow slideInLeft my-4 text-center" id="work-Title">Portfolio</h1>
        <hr className="wow slideInLeft mb-5" style={{ borderWidth: '10px', backgroundColor: '#00000099', color: '#FFFFFF', }}></hr>



        <div className="card-group row row-cols-1 row-cols-md-2">

          <div className="col-md-4 mb-4 my-5">
            <div className="card d-flex flex-column wow fadeInUp text-center">
              <div className="bg-image hover zoom">
                <a href="https://book-search-engine-mern-2021.herokuapp.com/" target="_blank" rel="noreferrer">
                  <img className="card-img-top img-fluid" src={bookSearchPic} alt="RPG"></img>
                </a>
              </div>
              <div className="mask rgba-white-slight"></div>
              <h4 className="card-title">Book Search</h4>
              <p className="card-text">Click the image to be taken to a refactored RESTful to a MERN-stack
                based book search application. </p>
              <a href="https://github.com/Dkallen117/book-Search-Engine" target="_blank" rel="noreferrer">
                <button type="button" className="btn blue-gradient btn-lg mb-5">GitHub Respository</button>
              </a>
            </div>
          </div>


          <div className="col-md-4 mb-4 my-5">
            <div className="card d-flex flex-column wow fadeInUp text-center">
              <div className="bg-image hover zoom">
                <a href="https://jefarth-rpg-database.herokuapp.com/" target="_blank" rel="noreferrer">
                  <img className="card-img-top img-fluid" src={rpgPic} alt="RPG"></img>
                </a>
              </div>
              <div className="mask rgba-white-slight"></div>
              <h4 className="card-title">RPG Database</h4>
              <p className="card-text">Click the image to be taken to experience my second team-based website
                where users can create RPG style characters and compare them to previously created ones</p>
              <a href="https://github.com/Dkallen117/rpg-character-sheet" target="_blank" rel="noreferrer">
                <button type="button" className="btn blue-gradient btn-lg mb-5">GitHub Respository</button>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4 my-5">
            <div className="card d-flex flex-column wow fadeInUp text-center">
              <div className="bg-image hover zoom">
                <a href="https://drive.google.com/file/d/1L170PB6NC_hPIxG2VKxrctGLzShzYpn1/view" target="_blank" rel="noreferrer">
                  <img className="card-img-top img-fluid" src={ecommercePic} alt="E-Commerce"></img>
                </a>
              </div>
              <div className="mask rgba-white-slight"></div>
              <h4 className="card-title">E-Commerce Backend</h4>
              <p className="card-text">Click the image to be taken to a video demonstration of how to GET, PUT, POST,
                and DELETE products, tags, and categories in this e-commerce backend application</p>
              <a href="https://github.com/Dkallen117/e-commerce-backend" target="_blank" rel="noreferrer">
                <button type="button" className="btn blue-gradient btn-lg mb-5">GitHub Respository</button>
              </a>
            </div>
          </div>

          {/* Stock Scanner Card */}
          <div className="col-md-4 mb-4 my-5">
            <div className="card d-flex flex-column wow fadeInUp text-center">
              <div className="bg-image hover zoom">
                <a href="https://dkallen117.github.io/StockScanner/" target="_blank" rel="noreferrer">
                  <img className="card-img-top img-fluid" id="stock-Scanner-Photo" src={stockScanner} alt="Stock Scanner"></img>
                </a>
              </div>
              <div className="mask rgba-white-slight"></div>
              <h4 className="card-title">Stock Scanner</h4>
              <p className="card-text">Click the image to be taken to my first team-based website
                utilizing two different APIs. </p>
              <a href="https://github.com/Dkallen117/StockScanner" target="_blank" rel="noreferrer">
                <button type="button" className="btn blue-gradient btn-lg mb-5">GitHub Respository</button>
              </a>
            </div>
          </div>
          {/* Snarf Card */}
          <div className="col-md-4 mb-4 my-5">
            <div className="card d-flex flex-column wow fadeInUp text-center" id="snarf-Card">
              <div className="bg-image hover zoom">
                <a href="https://prezi.com/dwii7bnwk3rz/team-everybody-loves-snarf/" target="_blank" rel="noreferrer">
                  <img className="card-img-top" src={snarfPic}
                    alt="Snarf">
                  </img>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <h4 className="card-title mt-5">Video Game Studio Prezi Presentation</h4>
              <p className="card-text">Click the image to be taken to a team-based prezi presentation
                for a fictional video game studio! (Image Credit: Jason Velazquez //
                <a href="https://dribbble.com/shots/1453837-Snarf-minimal-vector-drawing-ThunderCats" target="_blank" rel="noreferrer">Image Link</a>)</p>
            </div>
          </div>
          {/* Metatron Card */}
          <div className="col-md-4 mb-4 my-5">
            <div className="card d-flex flex-column wow fadeInUp text-center">
              <div className="bg-image hover zoom">
                <a href="https://www.youtube.com/watch?v=WM8Mky99coE" target="_blank" rel="noreferrer">
                  <img className="card-img-top" id="meta-Cube-Photo" src={metatronPic} alt="Metatrons Cube"></img>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <h4 className="card-title mt-5">Metatron's Cube YouTube Video</h4>
              <p className="card-text">Click the image to be taken to a YouTube video of my teams fictional video game
                pitch to a fictional game studio.</p>
            </div>
          </div>
          {/* Weather Card */}
          <div className="col-md-4 mb-4 my-5" id="weather-Card">
            <div className="card d-flex flex-column wow fadeInUp text-center">
              <div className="bg-image hover zoom">
                <img className="card-img-top img-fluid" id="code-Refractor-Photo" src={weatherPic} alt="Weather"></img>
              </div>
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
              <h4 className="card-title">Weather Dashboard</h4>
              <p className="card-text">Click the image to be taken to a daily and 5-day forecast weather application. </p>
              <a href="https://github.com/Dkallen117/weather-Dashboard" target="_blank" rel="noreferrer">
                <button type="button" className="btn blue-gradient btn-lg mb-5">GitHub Respository</button>
              </a>
            </div>
          </div>
          {/* Code Refactor Card */}
          <div className="col-md-4 mb-4 my-5" id="code-Card">
            <div className="card d-flex flex-column wow fadeInUp text-center">
              <div className="bg-image hover zoom">
                <img className="card-img-top img-fluid" id="code-Refractor-Photo" src={refactorPic} alt="Code Refractor"></img>
              </div>
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
              <h4 className="card-title">Code Refracting</h4>
              <p className="card-text">Click the image to be taken to the first website I practiced code refractoring.</p>
              <a href="https://github.com/Dkallen117/code-Refractor" target="_blank" rel="noreferrer">
                <button type="button" className="btn blue-gradient btn-lg mb-5">GitHub Respository</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}