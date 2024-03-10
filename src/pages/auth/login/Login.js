import React from 'react';
import './Login.scss';
import { FaArrowRight } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';

const Login = () => {
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
            id="password"
            name="password"
            type="text"
            value="Password"
            labelText="Password"
            placeholder="Password"
            handleChenge={() => {}}
          />
          {/* password field */}
          <label className="checkmark-container" htmlFor="checkbox">
            <Input id="checkbox" type="checkbox" name="checkbox" value={false} />
            Keep me signed in
          </label>
        </div>
        {/* button component */}
        <Button label={'Sign In'} className="auth-button button" disabled={false} />
        <Link to={'/forgot-password'}>
          <span className="forgot-password">
            Forgot password ? <FaArrowRight className="arrow-right" />
          </span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
