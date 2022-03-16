import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Stepper.scss";
function Stepper({ steps, activeStepIndex }) {
  const getStepBorderStyle = useCallback(
    (index) => {
      return index < activeStepIndex
        ? "step-connector-active"
        : index === activeStepIndex
        ? "step-connector-partial"
        : "";
    },
    [activeStepIndex]
  );

  return (
    <Row className="stepper align-items-center justify-content-between">
      {steps.map((step, index) => (
        <>
          <div
            className={`step ${index <= activeStepIndex ? "active-step" : ""}`}
          >
            {step.label}
          </div>
          {index !== steps.length - 1 && (
            <Col className={`step-connector ${getStepBorderStyle(index)}`} />
          )}
        </>
      ))}
    </Row>
  );
}

Stepper.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStepIndex: PropTypes.number,
};
Stepper.defaultProps = { activeStepIndex: -1 };

export default Stepper;
