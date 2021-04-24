import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import MenuTop from "../components/admin/MenuTop";
import MenuSider from "../components/admin/MenuSider/MenuSider";
import LogIn from "../pages/admin/LogIn";
import useAuth from "../hooks/useAuth";

import { getAccessTokenApi, getRefreshTokenApi } from "../api/auth";

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  //console.log(props);
  const { routes } = props;
  const { Header, Content, Footer, Sider } = Layout;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { user, isLoading } = useAuth();

  const accessToken = getAccessTokenApi();
  const refreshToken = getRefreshTokenApi();

  if (!user && !isLoading) {
    return (
      <>
        <Route path="/admin/login" component={LogIn} />
        <Redirect to="/admin/login" />
      </>
    );
  }

  if (user && !isLoading) {
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout
          className="layout-admin"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          <Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className="layout-admin__content">
            <LoadRoutes routes={routes} />
          </Content>
          <Footer className="layout-admin__footer">fen1x</Footer>
        </Layout>
      </Layout>
    );
  }

  return null;
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
