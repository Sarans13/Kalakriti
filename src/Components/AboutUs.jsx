import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import "../Styles/AboutUs.css"
import AboutUsImg from "../Images/AboutUs.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p style={{textAlign:"center"}}>Book and Get Booked.</p>
            </div>
            <p className="mid">
            We believe that everyone deserves to live in spaces that reflect their unique style and personality, regardless of budget constraints. Our platform connects homeowners and renters with talented interior designers who are passionate about transforming spaces into beautiful, functional areas that inspire.Through our innovative online platform, users can easily upload pictures of their space, share their ideas, and collaborate with experienced designers to bring their vision to life.We empower designers to showcase their creativity and expertise, while also providing opportunities for local carpenters and artisans to collaborate on projects, ensuring every detail is crafted with care.Let's embark on this journey together to redefine the way we live and experience our spaces. Discover the endless possibilities of interior design.
            </p>
            <Link to={"/"}>
              Our Services{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src={AboutUsImg} alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
