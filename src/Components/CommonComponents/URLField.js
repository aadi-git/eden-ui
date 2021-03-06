import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "./TextField";

import "./URLField.scss";

function URLField({ url, placeholder, value, onChange }) {
  return (
    <Row className="url-field">
      <Col md={5} className="pe-0">
        <TextField className="url" value={url} disabled />
      </Col>
      <Col md={7} className="ps-0">
        <TextField
          className="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
}

URLField.propTypes = {
  url: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

URLField.defaultProps = {
  url: "",
  placeholder: "",
  value: "",
  onChange: () => {},
};

export default URLField;
