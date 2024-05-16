import { useState } from "react";
import React from "react";
import Layout from "../components/Layout/Layout";
import './login.css';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  
  
  const navigate = useNavigate();
  const location = useLocation();
  //   form control 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data to be sent:", {
      UserName,
      Password,
    });
    try {
      const res = await axios.post("http://139.59.38.234:80/api/Authentication/UserLogin", { UserName, Password });
      if (res && res.data) {
        toast.success(res.data && res.data, {
          duration: 3000,
        });
      
        localStorage.setItem('userData', JSON.stringify(res.data));
        navigate(location.state || '/');
      } else {
        toast.error(res.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
     
    }
  };

  return (
    <Layout>
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">Login</h4>

          <div className="mb-3">
            <input
              type="email"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              required
            />
          </div>
        
          <div className="mb-3">
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="enter the password"
              required
            />
          </div>
          <div className="mb-3">
          <button type="submit" className="btn btn-success w-100" onClick={() => {
            navigate('/forgot-password');
          }}>
            Forgot Password
          </button>
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <div className="text-muted p-4 text-center login_registrataion">Dont have n Account please<a className='text-decoration-none text-muted' href="/register">SignIn</a></div>
        </form>
        <br/>
        <br/>
      </div>
    </Layout>
  );
};

export default Login;

