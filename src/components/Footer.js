import React, { Component } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../assets/css/style.css'
function Footer() {
    const [state, handleSubmit] = useForm("xknynrjl");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
   return (
<footer>
    <div className="mask d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 col-xl-6">
                  <form className="card bg-image gradient-custom mask-custom p-5 text-white wow fadeInUp" 
                       onSubmit={handleSubmit} >
                  <h2 className="text-center mb-5">Message Form</h2>
                  <div className="form-outline form-white mb-4">
                      <input type="text" name="name" id="name" className="form-control form-control-lg" required />
                      <label className="form-label" for="form3Example4">Name</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="email" name="email" id="email" className="form-control form-control-lg" required />
                      <ValidationError  prefix="Email" field="email" errors={state.errors}/>
                      <label className="form-label" for="form3Example3">Email address</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                    <textarea className="form-control" name="message" id="message" rows="4" required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <label className="form-label" for="form4Example3">Message</label>
                    </div>
                    <button type="submit" disabled={state.submitting} className="btn btn-light btn-block mb-4">Send</button>
                  </form>  
                  <div className="d-flex justify-content-around my-3">
                  {/* GitHub */}
                  <a href="https://github.com/Dkallen117" 
                     target="_blank" 
                     rel="noreferrer"
                     data-mdb-toggle="tooltip" 
                     title="Github">
                  <i className="fab fa-github fa-3x"></i>
                  </a>
                  <a href="#top">
                  <i className="fas fa-angle-double-up fa-3x"></i>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/danielkentonallen/"
                     target="_blank"
                     rel="noreferrer"
                     data-mdb-toggle="tooltip"
                     title="LinkedIn">
                  <i className="fab fa-linkedin fa-3x"></i>
                  </a>
                  </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

    );
  }
export default Footer;