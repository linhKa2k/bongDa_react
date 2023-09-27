import React from "react";
import { Col, Row } from "antd";

import "./styleCard.scss";

export default function CardCommon(props) {
  const {
    cardLeft,
    cardHeader,
    cardContent,
    cardRight,
    cardFooter,
    gridHeader,
    gridLeft,
    gridContent,
    gridRight,
    gridFooter,
  } = props;
  
  return (
    <div className="card-container">
      <Row className="main-card">
        <Row className="card-header-container">
          <Col className="card-header" span={gridHeader}>{cardHeader}</Col>
        </Row>
        <Row className="card-content">
          <Col className="card-left" span={gridLeft}>{cardLeft}</Col>
          <Col className="card-center" span={gridContent}>{cardContent}</Col>
          <Col className="card-right" span={gridRight}>{cardRight}</Col>
        </Row>
        <Row>
          <Col className="card-footer" span={gridFooter}>{cardFooter}</Col>
        </Row>
      </Row>
    </div>
  );
}
