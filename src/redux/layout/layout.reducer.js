import LayoutActionTypes from "./layout.types";

const INITIAL_STATE = {
  isLeftPanelOpen: true,
  isRightPanelOpen: false
};
const layoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LayoutActionTypes.TOGGLE_LEFT_PANEL:
      return {
        ...state,
        isLeftPanelOpen: !state.isLeftPanelOpen
      };
    case LayoutActionTypes.TOGGLE_RIGHT_PANEL:
      return {
        ...state,
        isRightPanelOpen: !state.isRightPanelOpen
      };
    default:
      return state;
  }
};

export default layoutReducer;
