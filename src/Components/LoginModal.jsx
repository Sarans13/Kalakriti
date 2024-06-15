// Imports -----------------------------------------------
import React, { useState } from 'react';
import "../Styles/LoginModal.css";

const LoginModal = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
        <h2 style={{textAlign : "center"}}>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
