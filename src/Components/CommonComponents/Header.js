import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "../../Assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <Row className="header justify-content-center py-5">
      <Col md={3} className="d-flex justify-content-center align-items-center">
        <img src={logo} alt="eden" className="logo" />
        <span className="huge-text font-bold">Eden</span>
      </Col>
    </Row>
  );
}

export default Header;
