import React from "react";
import Row from "react-bootstrap/Row";
import TitleSubtitle from "../CommonComponents/TitleSubtitle";
import TextField from "../CommonComponents/TextField";
import URLField from "../CommonComponents/URLField";

function WorkspaceInfo() {
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
        <TextField placeholder="Workspace Name" />
      </div>
      <div className="pb-3">
        <div className="small-text pb-2">
          Workspace URL <span className="optional">(optional)</span>
        </div>
        <URLField placeholder="Workspace URL" url="www.eden.com/" />
      </div>
    </>
  );
}

export default WorkspaceInfo;
