import React from "react";
import { Flex, Menu } from "antd";
import "../Styles/Dashboard.css";
import {UserOutlined, ProfileOutlined, OrderedListOutlined, LogoutOutlined} from "@ant-design/icons";

const Sidebar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="Logo">
          <img src="logo.png" alt="logo" width="40px" />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          { key: "1", icon: <UserOutlined />, label: "Dashboard" },
          { key: "2", icon: <ProfileOutlined />, label: "Add Artisans" },
          { key: "3", icon: <OrderedListOutlined />, label: "Past Transactions" },
          { key: "4", icon: <LogoutOutlined />, label: "Logout" },
        ]}
      />
    </>
  );
};

export default Sidebar;
