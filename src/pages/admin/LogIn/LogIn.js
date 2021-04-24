import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/samurai.png";
import RegisterForm from "../../../components/admin/RegisterForm";
import LoginForm from "../../../components/admin/LoginForm";
import { getAccessTokenApi } from "../../../api/auth";

import "./LogIn.scss";

export default function LogIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if (getAccessTokenApi()) {
    return <Redirect to="/admin" />;
  }

  return (
    <Layout className="sing-in">
      <Content className="sing-in__content">
        <h1 className="sing-in__content-logo">
          <img src={Logo} alt="logo" />
        </h1>

        <div className="sing-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Log In</span>} key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab={<span>Sing In</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
