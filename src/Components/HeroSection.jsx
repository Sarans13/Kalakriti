// Imports -----------------------------------------------
import React from 'react'
import NavBar from './NavBar';
import "../Styles/HeroSection.css"
import landingImage1 from "../Images/LandingImage-4.jpg";
import landingImage3 from "../Images/LandingImage-2.jpg";
// import landingImage2 from "../Images/LandingImage-5.jpg";
import ThreeLines from "../Images/ThreeLines.svg";
import Logo from "../Images/logo.png";


const HeroSection = () => {
  return (
    <>
    <section className='heroSection' id='heroSection'>
    <NavBar/>
    <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Comfort</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src={landingImage1} alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Cozy</h1>
                <h1 className="title dishes_title">Serene</h1>
                <img src={ThreeLines} alt="threelines" />
              </div>
              <img className="logo" alt="logo" src={Logo} style={{width:"20%", margin:"auto"}}/>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox" id='DifferentLandingImage'>
            <img src={landingImage3} alt="hero" />
          </div>
          <h1 className="title dishes_title" style={{textAlign : "right"}}>Serene</h1>
        </div>
      </div>
    </section>

    </>
  )
}

export default HeroSection