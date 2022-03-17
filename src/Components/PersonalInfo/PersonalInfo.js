import React from "react";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

import TitleSubtitle from "../CommonComponents/TitleSubtitle";
import TextField from "../CommonComponents/TextField";
import { UPDATE_PERSONAL_INFO } from "../Reducer/actions";

function PersonalInfo({ data, dispatch }) {
  const onChange = (e, type) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_PERSONAL_INFO,
      payload: {
        [type]: e.target.value,
      },
    });
  };

  return (
    <>
      <Row className="py-4">
        <TitleSubtitle
          title="Welcome! First things first..."
          subtitle="You can always change them later."
        />
      </Row>
      <div className="pb-3">
        <div className="small-text pb-2">Full Name</div>
        <TextField
          placeholder="Full Name"
          value={data.fullName}
          onChange={(e) => onChange(e, "fullName")}
        />
      </div>
      <div className="pb-3">
        <div className="small-text pb-2">Display Name</div>
        <TextField
          placeholder="Display Name"
          value={data.displayName}
          onChange={(e) => onChange(e, "displayName")}
        />
      </div>
    </>
  );
}

PersonalInfo.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func,
};

PersonalInfo.defaultProps = {
  data: {},
  dispatch: () => {},
};

export default PersonalInfo;
