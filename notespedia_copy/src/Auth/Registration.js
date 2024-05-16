import { useState } from "react";
import React from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import toast from "react-hot-toast";

const Registration = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ReferralCode, setReferralCode] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  // form control
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data to be sent:", {
        FirstName,
        LastName,
        Email,
        Password,
        ReferralCode,
        PhoneNumber,
      });
      const res = await axios.post(
        "http://139.59.38.234:80/api/User/PublicUserRegistration",
        {
          FirstName,
          LastName,
          Email,
          Password,
          ReferralCode,
          PhoneNumber,
        }
      );
      console.log("Server response:", res.data); // Log the entire response
      //localhost:3000/register
       if (res && res.data) {
        toast.success(res.data && res.data);
      
        navigate("/login");
      } else {
        // Handle registration failure
        toast.error(res.data.message);
      
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="SignUp-ecommerce app">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">Registration</h4>

          <div className="mb-3">
            <input
              type="text"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
              placeholder="Enter your First Name"
              required
              autoFocus
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
              placeholder="Enter your Last Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter your Password"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={ReferralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              className="form-control"
              placeholder="Enter your Referral Code"
            
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-control"
              placeholder="Enter your Phone Number"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Registration;
