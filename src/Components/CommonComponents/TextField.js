import React from "react";
import PropTypes from "prop-types";
import RBForm from "react-bootstrap/Form";

import "./TextField.scss";

function TextField({ type, onChange, value, className, placeholder }) {
  const styleClass = "text-field small-text " + (className || "");
  return (
    <RBForm.Control
      type={type}
      onChange={onChange}
      value={value}
      className={styleClass}
      placeholder={placeholder}
    />
  );
}

TextField.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  type: "text",
  onChange: () => {},
  value: "",
  className: "",
  placeholder: "",
};

export default TextField;
