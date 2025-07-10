import React from 'react';
import '../../App.css';
import '../signup.css';

export default function SignUp() {
  return (
    <div className="sign-up">
      <div className="signup-container">
        <div className="signup-image">
          <img src="/images/undraw_sign-up_z2ku.svg" alt="Sign Up Illustration" />
        </div>
        <form className="signup-form">
          <h2>Create Account</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" placeholder="Enter username" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" placeholder="+1234567890" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select id="role" required>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter password" required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input id="confirmPassword" type="password" placeholder="Confirm password" required />
            </div>
          </div>

          <button type="submit" className="submit-btn">Sign Up</button>
          <div className="login-link">
            Already have an account? <a href="/login">Login here</a>
          </div>
        </form>
      </div>
    </div>
  );
}
