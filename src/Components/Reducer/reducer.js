import {
  UPDATE_EDEN_PLAN,
  UPDATE_PERSONAL_INFO,
  UPDATE_STEPPER,
  UPDATE_WORKSPACE_INFO,
} from "./actions";

export const initialState = {
  personalInfo: { fullName: "", displayName: "" },
  workspaceInfo: { workspaceName: "", url: "" },
  edenPlan: { plan: "" },
  activeStep: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          ...action.payload,
        },
      };

    case UPDATE_WORKSPACE_INFO:
      return {
        ...state,
        workspaceInfo: {
          ...state.workspaceInfo,
          ...action.payload,
        },
      };

    case UPDATE_EDEN_PLAN:
      return {
        ...state,
        edenPlan: {
          ...state.edenPlan,
          ...action.payload,
        },
      };

    case UPDATE_STEPPER:
      return {
        ...state,
        activeStep: action.payload,
      };

    default:
      return state;
  }
}
