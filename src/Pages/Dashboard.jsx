import React, { useState, useEffect } from "react";
import { Layout, Button, Flex } from "antd";
import Sidebar from "../Components/Sidebar";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "../Styles/Dashboard.css";
import CustomHeader from "../Components/CustomHeader";
import MainContent from "../Components/MainContent";
import SideContent from "../Components/SideContent";

const { Sider, Header, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 830) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Sidebar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content" style={{ overflowY: "scroll" }}>
          <Flex gap="large" className="flexContent">
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
