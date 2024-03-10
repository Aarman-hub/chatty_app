import React from 'react';
import './Register.scss';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth-inner">
      {/* <div className="alerts alert-success" role="alert">
        Error message
      </div> */}
      <form className="auth-form">
        <div className="form-input-container">
          {/* username field */}
          <Input
            id="username"
            name="username"
            type="text"
            value="Username"
            labelText="Username"
            placeholder="Enter Username"
            handleChenge={() => {}}
          />
          <Input
            id="email"
            name="email"
            type="text"
            value="Email"
            labelText="Email"
            placeholder="Enter Your Email"
            handleChenge={() => {}}
          />
          <Input
            id="password"
            name="password"
            type="password"
            value="Password"
            labelText="Password"
            placeholder="Password"
            handleChenge={() => {}}
          />
        </div>
        {/* button component */}
        <Button label={'Sign Up'} className="auth-button button" disabled={false} />
        <Link to={'/'}>
          <span className="forgot-password">Already have an account ? Login Here</span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
