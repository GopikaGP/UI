import React from 'react'
import Layout from '../components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6  ">
          <img
            src="/Images/Contact.jpg"
            alt="contactus"
            style = {{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 p-5 rightside_contact">
          <h1 >CONTACT US</h1>
          <p className="text-justify mt-2 text-uppercase">
            Any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@notespedia.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact