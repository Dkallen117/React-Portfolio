import React, { useRef, useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/style.css'

function Footer() {
  
  init("user_MtnRDz54CbneHj0t1h6cd");
  
  const notify = () => toast('Message has been sent!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleChange = (event) => {
    event.target.name === "name"
      ? setName(event.target.value)
      : event.target.name === "email"
        ? setEmail(event.target.value)
        : event.target.name === "message"
          ? setMessage(event.target.value)
          : console.log(event.error)
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qq9qhxe', 'template_5y6thzi', form.current)
      .then((result) => {
        console.log(result.text);
        notify();
        setName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <footer>
      <div className="mask d-flex align-items-center footer-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 col-xl-6 mt-4">
              <div className="modal fade" id="modalContactForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">

                <form ref={form} onSubmit={sendEmail}>
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">

                      <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Contact Me</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>

                      <div className="modal-body mx-3">
                        <div className="md-form mb-5">
                          <i className="fas fa-user prefix grey-text"></i>
                          <input type="text" name="name" id="name" value={name} onChange={(e) => handleChange(e)}
                            className="form-control validate" required></input>
                          <label data-error="wrong" data-success="right" >Your name</label>
                        </div>

                        <div className="md-form mb-5">
                          <i className="fas fa-envelope-square prefix grey-text"></i>
                          <input type="email" name="email" id="email" value={email} onChange={(e) => handleChange(e)}
                            className="form-control validate" required></input>
                          <label data-error="wrong" data-success="right" >Your email address</label>
                        </div>

                        <div className="md-form">
                          <i className="fas fa-pencil prefix grey-text"></i>
                          <textarea type="text" className="md-textarea form-control" name="message"
                            id="message" value={message} onChange={(e) => handleChange(e)} rows="4" required></textarea>
                          <label data-error="wrong" data-success="right" >Your message</label>
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-center">
                        <button type="submit" value="Send" className="btn blue-gradient">Send <i className="fas fa-paper-plane ml-1"></i></button>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="text-center" id="contact">
                <a className="mb-4" data-toggle="modal" data-target="#modalContactForm">
                  <i className="far fa-envelope fa-3x"></i>
                </a>
              </div>
              <div className='bottom-links'>
                <div className="d-flex justify-content-around my-3">
                  <a href="#top">
                    <i className="fas fa-angle-double-up fa-3x mt-3"></i>
                  </a>
                </div>
                <div className="link-container" id="linkContainer">
                  {/* LinkedIn */}
                  <a id='linkedInLink'
                    href="https://www.linkedin.com/in/danielkentonallen/"
                    target="_blank"
                    rel="noreferrer"
                    data-mdb-toggle="tooltip"
                    title="LinkedIn">
                    <i className="fab fa-linkedin fa-3x"></i>
                  </a>
                  {/* GitHub */}
                  <a id='githubLink'
                    href="https://github.com/Dkallen117"
                    target="_blank"
                    rel="noreferrer"
                    data-mdb-toggle="tooltip"
                    title="Github">
                    <i className="fab fa-github fa-3x mb-3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;