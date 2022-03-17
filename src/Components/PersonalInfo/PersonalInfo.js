import React from "react";
import Row from "react-bootstrap/Row";
import TitleSubtitle from "../CommonComponents/TitleSubtitle";
import TextField from "../CommonComponents/TextField";

function PersonalInfo() {
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
        <TextField placeholder="Full Name" />
      </div>
      <div className="pb-3">
        <div className="small-text pb-2">Display Name</div>
        <TextField placeholder="Display Name" />
      </div>
    </>
  );
}

export default PersonalInfo;
