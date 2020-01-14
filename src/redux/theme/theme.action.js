import ThemeActionTypes from "./theme.types";

export const setLightTheme = () => ({
  type: ThemeActionTypes.SET_CURRENT_THEME
});

export const setDarkTheme = () => ({
  type: ThemeActionTypes.SET_DARK_THEME
});

export const toggleTheme = () => ({
  type: ThemeActionTypes.TOGGLE_THEME
});
