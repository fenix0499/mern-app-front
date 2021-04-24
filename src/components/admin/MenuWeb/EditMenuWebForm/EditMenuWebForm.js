import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { FontSizeOutlined, LinkOutlined } from "@ant-design/icons";
import { updateMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";

import "./EditMenuWebForm.scss";

export default function EditMenuWebForm(props) {
  const { setIsVisible, setReloadMenuWeb, menu } = props;
  const [menuWebData, setMenuWebData] = useState({});

  useEffect(() => {
    setMenuWebData(menu);
  }, [menu]);

  const editMenu = (e) => {
    if (!menuWebData.title || !menuWebData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios...",
      });
    } else {
      const accessToken = getAccessTokenApi();
      updateMenuApi(accessToken, menuWebData._id, menuWebData)
        .then((response) => {
          notification["success"]({
            message: response
          });
          setIsVisible(false);
          setReloadMenuWeb(true);
        })
        .catch(() => {
          notification["error"]({
            message: "Error en el servidor...",
          });
        });
    }
  };

  return (
    <div className="edit-menu-web-form">
      <EditForm
        editMenu={editMenu}
        menuWebData={menuWebData}
        setMenuWebData={setMenuWebData}
      />
    </div>
  );
}

function EditForm(props) {
  const { menuWebData, setMenuWebData, editMenu } = props;

  return (
    <Form className="form-edit" onFinish={editMenu}>
      <Form.Item>
        <Input
          prefix={<FontSizeOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          placeholder="Titulo"
          value={menuWebData.title}
          onChange={(e) =>
            setMenuWebData({ ...menuWebData, title: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LinkOutlined style={{ color: "rgba(0,0,0,.25" }} />}
          placeholder="Titulo"
          value={menuWebData.url}
          onChange={(e) =>
            setMenuWebData({ ...menuWebData, url: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar menu
        </Button>
      </Form.Item>
    </Form>
  );
}
