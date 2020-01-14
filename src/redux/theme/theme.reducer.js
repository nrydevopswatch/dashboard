import ThemeActionTypes from "./theme.types";

const INITIAL_STATE = {
  currentTheme: "dark"
};
const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.SET_LIGHT_THEME:
      return {
        ...state,
        currentTheme: "light"
      };
    case ThemeActionTypes.SET_DARK_THEME:
      return {
        ...state,
        currentTheme: "dark"
      };
    case ThemeActionTypes.TOGGLE_THEME:
      return {
        ...state,
        currentTheme: state.currentTheme === "light" ? "dark" : "light"
      };
    default:
      return state;
  }
};

export default themeReducer;
