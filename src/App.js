import React, { useReducer } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "./Components/CommonComponents/Button";
import Stepper from "./Components/CommonComponents/Stepper";
import Header from "./Components/CommonComponents/Header";

import PersonalInfo from "./Components/PersonalInfo/PersonalInfo";
import WorkspaceInfo from "./Components/WorkspaceInfo/WorkspaceInfo";
import EdenPlan from "./Components/EdenPlan/EdenPlan";
import Congratulations from "./Components/Congratulations/Congratulations";

import { STEPPER_STEPS } from "./Constants";
import { initialState, reducer } from "./Components/Reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { personalInfo, workspaceInfo, edenPlan, activeStep } = state;

  const onCreateWorkspaceClick = () => {
    dispatch({
      type: "UPDATE_STEPPER",
      payload:
        activeStep < STEPPER_STEPS.length - 1 ? activeStep + 1 : activeStep,
    });
  };

  const getButtonTitle = () =>
    activeStep === 3 ? "Launch Eden" : "Create Workspace";

  return (
    <Container className="App">
      <Header />
      <Row className="justify-content-center">
        <Stepper activeStepIndex={activeStep} steps={STEPPER_STEPS} />
      </Row>
      <Row className="justify-content-center">
        <Col sm={8} md={5} lg={5} xl={4}>
          {activeStep === 0 && (
            <PersonalInfo data={personalInfo} dispatch={dispatch} />
          )}
          {activeStep === 1 && (
            <WorkspaceInfo data={workspaceInfo} dispatch={dispatch} />
          )}
          {activeStep === 2 && <EdenPlan data={edenPlan} dispatch={dispatch} />}

          {activeStep === 3 && (
            <Congratulations name={personalInfo.displayName} />
          )}
        </Col>
      </Row>
      <Row className="justify-content-center py-3">
        <Col sm={8} md={5} lg={5} xl={4}>
          <Button title={getButtonTitle()} onClick={onCreateWorkspaceClick} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
