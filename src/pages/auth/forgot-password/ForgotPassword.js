import React from 'react';
import './ForgotPassword.scss';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import BackgroundImage from '../../../assets/images/background.jpg';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {/* <div className="alerts alert-success" role="alert">
                            Error message
                        </div> */}
                <form className="auth-form">
                  <div className="form-input-container">
                    {/* username field */}
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      value="Email"
                      labelText="Email"
                      placeholder="example@mail.com"
                      handleChenge={() => {}}
                    />
                  </div>
                  {/* button component */}
                  <Button label={'Sign In'} className="auth-button button" disabled={false} />
                  <Link to={'/'}>
                    <span className="forgot-password">
                      <FaArrowLeft className="arrow-left" /> Go Back Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
