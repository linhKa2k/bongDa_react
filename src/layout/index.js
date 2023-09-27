import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import TopBar from "../components/common/TopBar";
import NavBar from "../components/common/NavBar";
import "./LayoutStyle.scss";

const { Header, Footer, Content } = Layout;

export default function LayoutComponent() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <TopBar />
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>
          <NavBar />
        </Footer>
      </Layout>
    </>
  );
}
