import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [phone, setPhone] = useState(0);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // const { data } = await axios.post(
      //   "http://localhost:4000/reservation/send",
      //   { firstName, lastName, email, phone, date, time, userType },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     withCredentials: true,
      //   }
      // );
      // toast.success(data.message);
      toast.success("Sarans You did it!");
      setFirstName("");
      setLastName("");
      setPhone(0);
      setEmail("");
      setPassword("");
      setRePassword("");
      setUserType(""); // Reset user type
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
              {/* <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div> */}
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
                >
                  <option value="">Select User Type</option>
                  <option value="Customer">Customer</option>
                  <option value="Interior Designer">Interior Designer</option>
                  <option value="Worker/Carpenter">Worker/Carpenter</option>
                </select>
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
