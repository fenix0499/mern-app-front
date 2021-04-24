import React from "react";
import { Row, Col } from "antd";
import {
  BookOutlined,
  CodeOutlined,
  DatabaseOutlined,
  RightOutlined,
  HddOutlined,
  AppstoreOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col lg={16}>
        <h3>Navegacion!</h3>
      </Col>
      <br />
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <BookOutlined className="icon" /> Cursos Online
        </a>
      </li>
      <li>
        <a href="#">
          <CodeOutlined className="icon" /> Desarrollo Web
        </a>
      </li>
      <li>
        <a href="#">
          <DatabaseOutlined className="icon" /> Base de Datos
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined className="icon" /> Politica de privacidad
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <HddOutlined className="icon" /> Sistemas/Servidores
        </a>
      </li>
      <li>
        <a href="#">
          <AppstoreOutlined className="icon" /> CMS
        </a>
      </li>
      <li>
        <a href="#">
          <UserOutlined className="icon" /> Portafolio
        </a>
      </li>
      <li>
        <a href="#">
          <RightOutlined className="icon" /> Politica de Cookies
        </a>
      </li>
    </ul>
  );
}
