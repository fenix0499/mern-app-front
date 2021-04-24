import React from "react";
import { Row, Col, Card } from "antd";
import {
  ClockCircleOutlined,
  KeyOutlined,
  MessageOutlined,
  UserOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

import "./HomeMyCoursesWork.scss";

export default function HomeMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>Como funcionan mis cursos???</h2>
        <h3>
          Cada curso cuenta con contenido gajo la web de Udemy, activa las 24
          horas al dia los 365 dias del anio...
        </h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              Icon={ClockCircleOutlined}
              title="Cursos y Clases"
              description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion..."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              Icon={KeyOutlined}
              title="Acceso 24/7"
              description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion..."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              Icon={MessageOutlined}
              title="Aprendizaje colaborativo"
              description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion..."
            />
          </Col>
        </Row>

        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              Icon={UserOutlined}
              title="Mejora tu perfil"
              description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion..."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              Icon={DollarOutlined}
              title="Precios bajos"
              description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion..."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              Icon={CheckCircleOutlined}
              title="Certificados de finalizacion"
              description="Cursos de entre 10 y 30 horas y cada clase del curso con duracion..."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { Icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
      <Icon className='iconStyle'/>
      <Meta title={title} description={description} />
    </Card>
  );
}
