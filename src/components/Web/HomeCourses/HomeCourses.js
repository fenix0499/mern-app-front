import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import reactJs from "../../../assets/img/png/img1.png";
import reactNative from "../../../assets/img/png/img2.png";
import typeScript from "../../../assets/img/jpg/img3.jpg";
import nextJs from "../../../assets/img/jpg/img4.jpeg";
import gatsby from "../../../assets/img/png/img5.png";
import redux from "../../../assets/img/png/img6.png";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Aprende y mejora tus habilidades</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJs}
              title="React Js"
              subtitle="Todos los niveles."
              link="https://www.udemy.com/"
            />
          </Col>

          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="React Js"
              subtitle="Todos los niveles."
              link="https://www.udemy.com/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={typeScript}
              title="React Js"
              subtitle="Todos los niveles."
              link="https://www.udemy.com/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={nextJs}
              title="React Js"
              subtitle="Todos los niveles."
              link="https://www.udemy.com/"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={gatsby}
              title="React Js"
              subtitle="Todos los niveles."
              link="https://www.udemy.com/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={redux}
              title="React Js"
              subtitle="Todos los niveles."
              link="https://www.udemy.com/"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to='/courses'>
          <Button>Ver mas...</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="-blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
