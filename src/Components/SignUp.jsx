// Imports ----------------------------------------------------------------
import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";

const SignUp = () => {

  // Making use states for the filling the signup form ----------------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
 
  //Backend fetch api call ---------------------------------------------------
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if(password !== rePassword){
        toast.error("Password and Re-Password do not match");
        return;
      }
      const { data } = await axios.post(
        "https://kalakriti-backend-nfdm.onrender.com/signup",
        { firstName, lastName, email, phone, userType, address, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setPassword("");
      setRePassword("");
      setUserType("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }  
  };
  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="Register.jpg" alt="res" />
        </div>
        <div className="banner">  
          <div className="reservation_form_box">
            <h1>JOIN US</h1>
            <p>For Further Questions, Please enquire</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  padding={{padding : 0}}
                >
                  <option value="" style={{padding : 0}}>Select User Type</option>
                  <option value="Customer" padding={{padding : 0}}>Customer</option>
                  <option value="Interior Designer" padding={{padding : 0}}>Interior Designer</option>
                  <option value="Worker/Carpenter" padding={{padding : 0}}>Worker/Carpenter</option>
                </select>
                <input
                  type="text"
                  placeholder="Place of Service"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="email_tag"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="ReType Password"
                  className="email_tag"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </div>
              <button type="submit" onClick={handleSignup}>
                SIGNUP{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;


