import React from "react";
import PropTypes from "prop-types";
import RBButton from "react-bootstrap/Button";

import "./Button.scss";

function Button({ title, onClick, className }) {
  const styleClass = "button small-text " + (className || "");
  return (
    <RBButton onClick={onClick} className={styleClass}>
      {title}
    </RBButton>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};

export default Button;
