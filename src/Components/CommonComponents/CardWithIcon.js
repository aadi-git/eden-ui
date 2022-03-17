import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./CardWithIcon.scss";

function CardWithIcon({ icon, title, text, onClick, isActive }) {
  return (
    <Card
      className={`card-with-icon ${isActive ? "card-active" : ""}`}
      onClick={onClick}
    >
      <Card.Body>
        <img src={icon} alt="card" className="pb-3"/>
        <Row className="px-2">
          <Col md={12} className="pb-2 title">
            {title}
          </Col>
          <Col md={12} className="text">
            {text}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

CardWithIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

CardWithIcon.defaultProps = {
  title: "",
  text: "",
  onClick: "",
  isActive: false,
};

export default CardWithIcon;
