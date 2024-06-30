// Imports ----------------------------------------------------------------------------
import React from "react";
import { Flex, Menu } from "antd";
import "../Styles/Dashboard.css";
import { useNavigate } from 'react-router-dom';
import {UserOutlined, ProfileOutlined, LogoutOutlined} from "@ant-design/icons";
import logo from "../Images/logo.png"
import toast from "react-hot-toast";

const Sidebar = () => {
  // initialize the navigation -------------------------------------------------------
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  }

  const handleLogout = () => {
    // Clear local storage or any stored user data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success("Logout Successful!!")
    // Redirect to the login page
    navigate('/');
  };
  return (
    <>
      <Flex align="center" justify="center">
        <div className="Logo">
          <img src={logo} alt="logo" width="40px" />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          { key: "1", icon: <UserOutlined />, label: "Dashboard" },
          { key: "2", icon: <ProfileOutlined />, label: "Add Artisans", onClick: handleSignup },
          { key: "3", icon: <LogoutOutlined />, label: "Logout", onClick: handleLogout },
        ]}
      />
    </>
  );
};

export default Sidebar;
