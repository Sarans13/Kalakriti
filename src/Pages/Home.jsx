// Imports ------------------------------------------------
import React from 'react'
import HeroSection from '../Components/HeroSection'
import AboutUs from "../Components/AboutUs"
import Prices from "../Components/Prices"
import Services from "../Components/Services"
import WhoWeAre from "../Components/WhoWeAre"
import Team from "../Components/Team"
import "../Styles/Home.css"
import Footer from "../Components/Footer"
import SignUp from "../Components/SignUp"

const Home = () => {
  return (
    <div className='home'>
    <HeroSection/>
    <AboutUs />
    <Prices />
    <Services />
    <WhoWeAre />
    <Team/>
    <SignUp />
    <Footer />
    </div>
  )
}

export default Home