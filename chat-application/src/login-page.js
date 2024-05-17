// src/Login.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './css/Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div 
      className="login-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="login-form"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <motion.input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              whileFocus={{ borderColor: "#AE445A", backgroundColor: "#F39F5A" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <div className="password-container">
              <motion.input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                whileFocus={{ borderColor: "#AE445A", backgroundColor: "#F39F5A" }}
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <motion.button 
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Login;
