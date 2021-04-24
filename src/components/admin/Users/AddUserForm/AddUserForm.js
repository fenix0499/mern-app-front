import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { singUpAdminApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./AddUserForm.scss";

export default function AddUserForm(props) {
  const { setIsVisible, setReloadUsers } = props;
  const [userData, setUserData] = useState({});

  const addUser = (e) => {
    if (
      !userData.name ||
      !userData.lastname ||
      !userData.role ||
      !userData.email ||
      !userData.password ||
      !userData.repeatPassword
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios...",
      });
    } else if (userData.password !== userData.repeatPassword) {
      notification["error"]({
        message: "Las contrasenias no son iguales...",
      });
    } else {
      const accessToken = getAccessTokenApi();

      singUpAdminApi(accessToken, userData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisible(false);
          setReloadUsers(true);
          setUserData({});
        })
        .catch((err) => {
          notification["error"]({
            message: err,
          });
        });
    }
  };

  return (
    <div className="add-user-form">
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      />
    </div>
  );
}

function AddForm(props) {
  const { userData, setUserData, addUser } = props;
  const { Option } = Select;

  return (
    <Form className="form-add" onFinish={addUser}>
      <Row guter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25" }} />}
              placeholder="Nombre"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25" }} />}
              placeholder="Apellido"
              value={userData.lastname}
              onChange={(e) =>
                setUserData({ ...userData, lastname: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row guter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25" }} />}
              type="email"
              placeholder="Correo electronico"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Selecciona un rol..."
              onChange={(e) => setUserData({ ...userData, role: e })}
              value={userData.role}
            >
              <Option value="admin">Administrador</Option>
              <Option value="editor">Editor</Option>
              <Option value="reviwer">Revisor</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row guter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25" }} />}
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25" }} />}
              type="password"
              placeholder="Repeat password"
              value={userData.repeatPassword}
              onChange={(e) =>
                setUserData({ ...userData, repeatPassword: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Usuario...
        </Button>
      </Form.Item>
    </Form>
  );
}
