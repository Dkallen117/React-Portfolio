import React, { Component } from 'react';
import '../assets/css/style.css'
export default class Footer extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
    //   <footer>
    //   <div className="row">
    //     <div className="twelve columns">
    //       <ul className="social-links">
    //         {
    //           resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
    //             return(
    //               <li>
    //                 <a href={item.url}>
    //                 <i className={item.className} />
    //                 </a>
    //               </li>
    //             )
    //           })
    //         }
    //       </ul>
          
    //     </div>
    //     <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
    //   </div>
    // </footer>

    <footer class="row justify-content-center my-4 animated fadeInUp">

    <div class="col-12 col-sm-6 col-md-4">
      <address>

        <h5>
          Email me at: <a href="mailto:danielkentonallen@gmail.com">danielkentonallen@gmail.com </a>
        </h5>

      </address>
    </div>

  </footer>
    );
  }
}