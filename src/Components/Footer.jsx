import React from "react";
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">SARANS</div>
          <div className="right">
            <p>BHUBANESWAR</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By Sarans13</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By Sarans Mishra.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;