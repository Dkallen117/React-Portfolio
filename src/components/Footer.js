import React, { Component } from 'react';
import '../assets/css/style.css'
export default class Footer extends Component {
  render() {
   return (
<footer>
    <div className="mask d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 col-xl-6">
                  <form className="card bg-image gradient-custom mask-custom p-5 text-white wow fadeInUp">
                  <h2 className="text-center mb-5">Message Form</h2>
                  <div className="form-outline form-white mb-4">
                      <input type="text" id="form3Example4" className="form-control form-control-lg" required />
                      <label className="form-label" for="form3Example4">Name</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="email" id="form3Example3" className="form-control form-control-lg" required />
                      <label className="form-label" for="form3Example3">Email address</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                    <textarea className="form-control" id="form4Example3" rows="4" required></textarea>
                    <label className="form-label" for="form4Example3">Message</label>
                    </div>

                    <div className="form-check d-flex  mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                        checked
                      />
                      <label className="form-check-label" for="form2Example3">
                      Send me a copy of this message
                      </label>
                    </div>
                    <button type="submit" className="btn btn-light btn-block mb-4">Send</button>
                  </form>  
          </div>
        </div>
      </div>
    </div>
  </footer>

    );
  }
}