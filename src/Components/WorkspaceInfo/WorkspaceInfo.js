import React from "react";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

import TitleSubtitle from "../CommonComponents/TitleSubtitle";
import TextField from "../CommonComponents/TextField";
import URLField from "../CommonComponents/URLField";
import { UPDATE_WORKSPACE_INFO } from "../Reducer/actions";

function WorkspaceInfo({ data, dispatch }) {
  const onChange = (e, type) => {
    e.preventDefault();
    dispatch({
      type: UPDATE_WORKSPACE_INFO,
      payload: {
        [type]: e.target.value,
      },
    });
  };

  return (
    <>
      <Row className="py-4">
        <TitleSubtitle
          title="Let's set up a home for all your work"
          subtitle="You can always create another workspace later."
        />
      </Row>
      <div className="pb-3">
        <div className="small-text pb-2">Workspace Name</div>
        <TextField
          placeholder="Workspace Name"
          value={data.workspaceName}
          onChange={(e) => onChange(e, "workspaceName")}
        />
      </div>
      <div className="pb-3">
        <div className="small-text pb-2">
          Workspace URL <span className="optional">(optional)</span>
        </div>
        <URLField
          placeholder="Workspace URL"
          url="www.eden.com/"
          value={data.url}
          onChange={(e) => onChange(e, "url")}
        />
      </div>
    </>
  );
}

WorkspaceInfo.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func,
};

WorkspaceInfo.defaultProps = {
  data: {},
  dispatch: () => {},
};

export default WorkspaceInfo;
