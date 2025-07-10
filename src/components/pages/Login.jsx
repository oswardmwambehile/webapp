import React from 'react';
import '../../App.css';
import '../signup.css'; // Reusing your signup CSS

export default function Login() {
  return (
    <div className="sign-up">
      <div className="signup-container">
        <div className="signup-image">
          <img src="/images/undraw_secure-login_m11a.svg" alt="Login Illustration" />
        </div>
        <form className="signup-form">
          <h2>Login to Your Account</h2>

          <div className="form-group" style={{ marginBottom: '1rem' }}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="email@example.com" required />
          </div>

          <div className="form-group" style={{ marginBottom: '0.5rem' }}>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter password" required />
          </div>

          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="submit-btn">Login</button>

          <div className="login-link">
            Don't have an account? <a href="/sign-up">Sign Up here</a>
          </div>
        </form>
      </div>
    </div>
  );
}
