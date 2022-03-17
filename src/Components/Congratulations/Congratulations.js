import React from "react";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

import TitleSubtitle from "../CommonComponents/TitleSubtitle";

import congratsIcon from "../../Assets/congratulations-logo.png";

function Congratulations({ name }) {
  return (
    <div className="congrats pt-5">
      <div className="pt-2 d-flex justify-content-center">
        <img src={congratsIcon} alt="congrats" className="congrats-icon" />
      </div>
      <Row>
        <TitleSubtitle
          title={`Congratulations, ${name}!`}
          subtitle="You have completed onboarding, you can start using the Eden!"
        />
      </Row>
    </div>
  );
}

Congratulations.propTypes = {
  name: PropTypes.string,
};

Congratulations.defaultProps = {
  name: "",
};

export default Congratulations;
