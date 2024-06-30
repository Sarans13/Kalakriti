// Imports --------------------------------------------------------------------------
import React, { useState, useEffect } from "react";
import "../Styles/LoginModal.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const BookNow = ({ showModal, setShowModal, selectedId, userType }) => {
  // Initialize useState for sending the json to backend-----------------------------
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState();
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [customers, setCustomers] = useState([]);
  const [fetchedUserType, setFetchedUserType] = useState(userType);
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  // fetch the createdBy userId from the url ----------------------------------------
  const { userId } = useParams();
  // Backend code to connect with backend--------------------------------------------
  const handleBooking = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("createdBy", userId);
    formData.append("createdFor", selectedId);
    formData.append("customer", selectedCustomer);
    formData.append("description", description);
    images.forEach((image) => {
      formData.append("images", image);
    });
    try {
      const { data } = await axios.post(
        "https://kalakriti-backend-nfdm.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setShowModal(false);
      window.location.reload();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // backend call to fetch the customers for the interior designers -----------------
  const handlefetchCustomers = async () => {
    try {
      const { data } = await axios.get(
        `https://kalakriti-backend-nfdm.onrender.com/interior-designer/customers/${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setCustomers(data);
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  useEffect(() => {
    handlefetchCustomers();
  }, []);

  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <h2 style={{ textAlign: "center" }}>Upload Images</h2>
        <form onSubmit={handleBooking}>
          <div className="form-group">
            <label>Image: (optional) </label>
            <input type="file" multiple onChange={handleImageChange} />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          {userType === "Interior Designer" && (
            <>
              <div className="form-group">
                <label>Customer:</label>
                <select
                  value={selectedCustomer}
                  onChange={(e) => setSelectedCustomer(e.target.value)}
                  required
                  style={{ width: "100%" }}
                >
                  <option value="">Select a customer</option>
                  {customers.map((customer) => (
                    <option key={customer._id} value={customer._id}>
                      {customer.firstName} {customer.lastName}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
          <button type="submit">Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookNow;
