// Imports -------------------------------------------------------------------------
import React, { useState } from 'react';
import "../Styles/LoginModal.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResolveModal = ({ showModal, setShowModal, transactionId, userId }) => {
  const [description, setDescription] = useState("");

  const handleResolve = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://kalakriti-backend-nfdm.onrender.com/resolve-transaction", {
        userId,
        transactionId,
        description,
      });
      toast.success("Transaction resolved successfully");
      window.reload();
      setShowModal(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error resolving transaction");
    }
  };

  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
        <h2 style={{ textAlign: "center" }}>Resolve Transaction</h2>
        <form onSubmit={handleResolve}>
          <div className="form-group">
            <label>Description: </label>
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResolveModal;
