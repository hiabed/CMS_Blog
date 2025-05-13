import React, { useState } from 'react';
 import './LoginForm.css'; // Import the CSS file

 function LoginForm({ onLogin }) {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
     e.preventDefault();
     // In a real application, you would perform authentication here
    //  if (username === 'test' && password === 'password') {
       onLogin();
    //  } else {
    //    alert('Invalid credentials');
    //  }
   };

   return (
     <div className="login-container">
       <div className="login-form-wrapper">
         <div className="login-image-container">
           <img src="/blog.jpg" style={{height: "100%", width: "100%",borderRadius: "50%"}} alt="Login Illustration" className="login-image" />
         </div>
         <form onSubmit={handleSubmit} className="login-form">
           <h2>Sign In</h2>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit" className="login-button">Sign In</button>
            <p className="signup-link">
                Don't have an account? <a href="#">Sign up</a>
            </p>
         </form>
       </div>
     </div>
   );
 }

 export default LoginForm;