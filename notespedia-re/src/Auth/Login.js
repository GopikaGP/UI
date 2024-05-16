import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Layout from '../components/Layout/Layout';

const Login = () => {
  const [input, setInput] = useState({
    emailid: '',
    password: '',
  });

  const [error, setError] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setError(LoginValidation(input.emailid, input.password));
    console.log(input.emailid);
    console.log(input.password);
    // Axios POST request removed

    // Handle your login logic here
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const LoginValidation = (email, pwd) => {
    let errors = {};

    if (!email) {
      errors.email = '*Email is Required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = '*Email Is Invalid';
    }
    if (!pwd) {
      errors.pwd = '*Password is Required';
    } else if (pwd.length < 8) {
      errors.pwd = '*Password should contain at least 8 characters';
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,10}$/.test(pwd)
    ) {
      errors.pwd =
        'Password must contain one uppercase letter, one number and a special character';
    }

    return errors;
  };

  // handle disable submit
  const isValid = input.emailid && input.password;

  return (
    <>
        <Layout>
      <div className="login-app-main">
        <div className="second-card">
          <br />

          <h4 className="card-title-2">Login</h4>
          <p className="login-con">Please login using account detail below.</p>
          <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <input
                className="login-inp"
                type="text"
                placeholder="Email Address"
                name="emailid"
                value={input.emailid}
                onChange={onInputChange}
              />
              {error.email && <p className="error">{error.email}</p>}
              <br />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="login-inp"
                name="password"
                value={input.password}
                onChange={onInputChange}
              />
              {error.pwd && <p className="error">{error.pwd}</p>}
              <br />
              <br />
              <Link className="pass-lin" to="forgetpassword">
                Forget your password
              </Link>
              <br />
              <br />
              <button type="submit" className="sign-bt" disabled={!isValid}>
                Sign In
              </button>
              <br />
              <br />

              <p className="para-2">
                Don’t have an Account?{' '}
                <Link className="new-acc" to="/signin">
                  Create Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Login;
