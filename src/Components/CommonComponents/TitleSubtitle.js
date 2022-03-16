import React from "react";
import PropTypes from "prop-types";

import "./TitleSubtitle.scss";
function TitleSubtitle({ title, subtitle }) {
  return (
    <div className="title-subtitle text-center py-4">
      <div className="py-2 font-bold huge-text">{title}</div>
      <div className="subtitle medium-text">{subtitle}</div>
    </div>
  );
}

TitleSubtitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

TitleSubtitle.defaultProps = {
  title: "",
  subtitle: "",
};

export default TitleSubtitle;
