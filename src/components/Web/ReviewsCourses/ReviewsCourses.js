import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/png/monkey-avatar.png";

import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>
            Forma parte de los +35 mil estudiantes que estan aprendiendo con mis
            cursos...
          </h2>
        </Col>
        <Col lg={4} />
      </Row>

      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Alonso Campos"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Un curso excelente, el profesor explica detalladamento como funciona react!"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Ramiro Reyes"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Un curso excelente, el profesor explica detalladamento como funciona react!"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Monkie Flip"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Un curso excelente, el profesor explica detalladamento como funciona react!"
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Marco Perez"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Un curso excelente, el profesor explica detalladamento como funciona react!"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Fernando Contreras"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Un curso excelente, el profesor explica detalladamento como funciona react!"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Andrea Hernandez"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersona}
                review="Un curso excelente, el profesor explica detalladamento como funciona react!"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;
  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
