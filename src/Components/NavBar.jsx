// Imports -----------------------------------------------------------
import React, { useState } from "react";
import data from "../data.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Styles/NavBar.css"
import LoginModal from './LoginModal';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
//   console.log(data.data[0]);
  return (
    <>
      <nav>
        <div className="logo">KalaKritti</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data.data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={() => setShowModal(true)}>Login</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
            <GiHamburgerMenu/>
        </div>
      </nav>
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default Navbar;
