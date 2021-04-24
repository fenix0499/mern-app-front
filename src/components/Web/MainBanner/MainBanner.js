import React from 'react';
import { Col, Row } from 'antd';

import './MainBanner.scss';

export default function MainBanner(){
  return (
    <div className='main-banner'>
      <div className='main-banner__dark' />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Aprende nuevas <br/> tecnologias web y movil.
          </h2>
          <h3>
            A travez de cursos, concisos y actualizados, creados por {' '}
            <br/>
            profecionales con anios de experiencia.
          </h3>
        </Col>
        <Col lg={4} />
      </Row>

    </div>
  )
}