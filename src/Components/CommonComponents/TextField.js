import React from "react";
import PropTypes from "prop-types";
import RBForm from "react-bootstrap/Form";

import "./TextField.scss";

function TextField({
  type,
  onChange,
  value,
  className,
  placeholder,
  disabled,
}) {
  const styleClass = "text-field small-text " + (className || "");
  return (
    <RBForm.Control
      type={type}
      onChange={onChange}
      value={value}
      className={styleClass}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}

TextField.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

TextField.defaultProps = {
  type: "text",
  onChange: () => {},
  value: "",
  className: "",
  placeholder: "",
  disabled: false,
};

export default TextField;
