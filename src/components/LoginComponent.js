// LoginComponent.jsx
import React from 'react';
import LoginForm from './LoginForm';
import { COMPANY_LOGO } from '../utils/constants';

const LoginComponent = () => {
  const containerStyle = {
    boxSizing: 'border-box',
    backgroundColor: 'rgb(0, 45, 202)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 0, // Reset margin
  };
  

  const formContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '20px',
    borderRadius: '15px',
    maxWidth: '400px',
    width: '100%',
    marginTop: '20px', // Adjust the spacing between logo and form
  };

  const companyLogoStyle = {
    width: '100px',
    marginBottom: '20px', // Adjust the spacing below the logo
    borderRadius:"15px"
  };

  return (
    <div style={containerStyle}>
      <img style={companyLogoStyle} src={COMPANY_LOGO} alt="Company Logo" />
      <div style={formContainerStyle}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginComponent;
