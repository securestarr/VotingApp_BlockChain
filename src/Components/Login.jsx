import React from "react";
import { LogIn, Wallet } from 'lucide-react';
import './Login.css';

// Background image (use the same one from the previous design)
import backgroundImage from './image.jpg';

const Login = (props) => {
  return (
    <div className="login-wrapper" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <LogIn className="login-icon" />
            <h1 className="welcome-message">Decentralized Voting Platform</h1>
          </div>
          
          <p className="login-description">
            Secure, Transparent, and Decentralized Voting
          </p>
          
          <div className="login-action">
            <button className="login-button" onClick={props.connectWallet}>
              <Wallet className="button-icon" />
              Connect with MetaMask
            </button>
            
            <div className="login-footer">
              <p>Secure blockchain-based voting system</p>
              <p>Ensuring transparency and fairness</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;