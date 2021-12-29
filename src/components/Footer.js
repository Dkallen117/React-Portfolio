import React, { useRef } from 'react';
import emailjs, { init } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/style.css'
function Footer() {
  init("user_MtnRDz54CbneHj0t1h6cd");
  const notify = () => toast("Wow so easy!");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qq9qhxe', 'template_5y6thzi', form.current)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <footer>
      <div className="mask d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 col-xl-6">
              <form className="card bg-image gradient-custom mask-custom p-5 text-white wow fadeInUp" ref={form} onSubmit={sendEmail}>
                <h2 className="text-center mb-5">Message Form</h2>
                <div className="form-outline form-white mb-4">
                  <input type="text" name="user_name" id="name" className="form-control form-control-lg" required />
                  <label className="form-label" for="form3Example4">Name</label>
                </div>

                <div className="form-outline form-white mb-4">
                  <input type="email" name="user_email" id="email" className="form-control form-control-lg" required />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>

                <div className="form-outline form-white mb-4">
                  <textarea className="form-control" name="message" id="message" rows="4" required></textarea>
                  <label className="form-label" for="form4Example3">Message</label>
                </div>
                <button type="submit" onClick={notify} value="Send" className="btn btn-light btn-block mb-4">Send</button>
                <ToastContainer />
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