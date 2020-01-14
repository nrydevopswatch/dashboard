import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectUserError = createSelector(
  [selectUser],
  user => user.error
);

export const selectUserIsLoading = createSelector(
  [selectUser],
  user => user.isLoading
);

export const selectDisplayName = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.displayName
);

export const selectPhotoURL = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.photoURL
);
