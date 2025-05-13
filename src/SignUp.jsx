import React from 'react';
 import './SignUp.css'; // You can create a CSS file for this later

 function SignUp() {
   return (
     <div className="signup-container">
        <div className="signup-form-wrapper">
            <h2>Sign Up</h2>
            <form className="signup-form">
                <div className="input-group">
                <label htmlFor="new-username">Username</label>
                <input type="text" id="new-username" />
                </div>
                <div className="input-group">
                <label htmlFor="new-password">Password</label>
                <input type="password" id="new-password" />
                </div>
                <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <p className="login-link">
                Already have an account? <Link to="/">Sign In</Link>
            </p>
        </div>
     </div>
   );
 }

 import { Link } from 'react-router-dom';
 export default SignUp;