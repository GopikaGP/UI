// import React from "react";
// import "../../styles/Footer.css";

// import {Row} from 'react-bootstrap' ; 
// import { useNavigate,Link  } from "react-router-dom";



// function Footer() {
//   const navigate = useNavigate();
//   function handleClick() {
//     navigate("/Aboutus");
  
//   }
//   return (
//     <div>
     
      
//     <div className="footer-main">
//       <div className="footer-in">
//         <div className="footer-hekto">
//         <div className="logo_footer">
//           <img className="footer_logo_img" src="/Images/logo.png" alt="logo"/>
//         </div>
//           <div className=" col-md-5 footer-item-1">
            
//             <div className="logo_content_footer">
//             <p>We are the next generation platform that provides digital hand written notes for all your 
//               entrance preparatory needs. Bringing you a one step solution to crack any high stake medical exam</p>
//               </div>
//             <h3 className="item-1-1 ">Follow Us</h3>
//             <div className="item-1-1">
//             <div className="d-flex flex-row">

//             </div>
            
//             </div>
//           </div>
//         </div>
//         <div className="footer-cat">
//           {/* <div className="title-foot">Category</div>
//           <div className="card-body-cat">
//             <div className="content-footer">
//             <Link className="content-footer" to="/HektoDemo">
//             HektoDemo
//           </Link>
//           <br/>
//           <Link className="content-footer" to="/Signin">
//             Sign In
//           </Link>
//           <br/>
//           <a href="error3" className="content-footer">Laptop  & Computer</a>
//               <br/>
          
//               <a href="error3" className="content-footer">Cameras & Photography</a>
//               <br/>
//               <a href="error3" className="content-footer">Smartphone & Tablets </a>
//               <br/>
//               <a href="error3" className="content-footer">Video Games & Consoles</a>
//               <br/>
//               <a href="error3" className="content-footer">Waterproofs Headphones</a>
              
//             </div>
//           </div> */}
//         </div>
//         <div className="footer-customer">
//           <div className="title-foot">Quicks Links</div>
//           <div className="card-body-customer">
//             <div className="content-footer">
//             <a href="Login" className="content-footer">My Account</a>
//               <br/>
//               <div onClick={handleClick}>About Us</div>
//               <Link className="content-footer"to="/FAQ">FAQ</Link>
//               <br/>
//               <a href="error3" className="content-footer">Return</a>
//               <br/>
//               <a href="error3" className="content-footer">Orders History</a>
//               <br/>
//               <a href="error3" className="content-footer">Order Tracking</a>

              
//             </div>
//           </div>
//         </div>
//         <div className="footer-pages">
//           <div className="title-foot">Contact us</div>
//           <div className="card-body-page">
//             <div className="content-footer">
            
//               <a href="Blog" >+91 8921841508</a>
            
//               <a href="error3" > support@notespaedia.com</a>
//               <br/>
//               <h4>Don’t miss the newest books</h4>
//               < div className="footer_signin_modify">
//               <input
//                 className="footer-mail"
//                 type="email"
//                 placeholder="Enter Email Address"
//               ></input>
//               <button className="footer-sign">Subscribe</button>
//             </div>
//               <a href="error3" className="content-footer">WooCommerce Pages</a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="copy-right">
//         <div className="last-footer">
//           <div className="footer-social">
//             <div className="sub-last">©Webecy - All Rights Reserved</div>
//           </div>
//           <div className="footer-pics">
//             {/* <img className="facebook" src={fb} alt="imge3"></img>
//             <img className="instagram" src={insta} alt="imge3"></img>
//             <img className="twit" src={twt} alt="imge3"></img> */}
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div>
        <div className="bcg"></div>
        <div className="row">
          <div className="footer-code">
            <div>
            <div className="footer-section">
              <div className="col-md-6">
                <div className="left_section-footer">
                  <div className="d-flex flex-column">
                    <div className="footer-image">
                      <img
                        className="footer-img"
                        src="/Images/logo.png"
                      ></img>
                    </div>
                    <p className="f-3">
                      we are the next generation platform that provides digital
                      hand written notes for all your entrances prepratory
                      needs.Bring you a one step solution to crack any high
                      stake medical exam
                    </p>
                    <>
                      <h2 className="footer-follow">Follow us</h2>
                      <div className="d-flex flex-row">
                        <div className="sociallogo">
                          <a href="#" class="fa fa-facebook"></a>
                          <a href="#" class="fa fa-twitter"></a>
                          <a href="#" class="fa fa-instagram"></a>
                          <a href="#" class="fa fa-google"></a>
                          <a href="#" class="fa fa-linkedin"></a>
                          <a href="#" class="fa fa-pinterest"></a>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="right_section-footer">
                  <div className="footer-text">
                    <h5 className="quicklnks">Quick Links</h5>
                    <ul>
                      <li className="footer-link">
                        <Link className="footer-label" to="/">
                          Home
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link className="footer-label" to="/Notes">
                          Notes
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link className="footer-label" to="/Notice board">
                          Notice board
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link className="footer-label" to="/Career">
                          Career
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link className="footer-label" to="/About us">
                          About us
                        </Link>
                      </li>{" "}
                      <li className="footer-link">
                        <Link className="footer-label" to="/Contact us">
                          Contact us
                        </Link>
                      </li>
                      <li className="footer-link">
                        <Link className="footer-label" to="/FAQ">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="ct-1">
                  <h5 className="ct-0">Contact us</h5>
                  <div className="ct-2">
                    <p className="ct-3">+91 8921841508</p>
                    <p className="ct-3">support@notespaedia.com</p>
                  </div>
                  <div className="e-0">
                    <p className="e-1">Don’t miss the newest books</p>
                    <div className="footer-subs">
                      <input
                        className="input-email"
                        type="text"
                        placeholder="email address"
                      />
                      <button className="btn-e">subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <span className="last">
              <span className="end">Copyright © 2023 Notespaedia |</span>
              <span className="end"> All rights reserved | </span>
              <Link className="end" to="/Privacy Policy">
                Privacy Policy |
              </Link>{" "}
              <Link className="end" to="/Refund Policy">
                Refund Policy |
              </Link>{" "}
              <Link className="end" to="/Terms of Services">
                Terms of Services |
              </Link>
              <span className="end">GSTIN 32BZWPM2799C1ZW</span>
            </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

