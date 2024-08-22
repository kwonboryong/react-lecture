const ACTION_TYPE = {
  SIGN_IN: 'log in',
  SIGN_OUT: 'log out',
};

export const signInAction = (payload) => ({
  type: ACTION_TYPE.SIGN_IN,
  payload,
});

export const signOutAction = () => ({
  type: ACTION_TYPE.SIGN_OUT,
});

export default function authReducer(state, action) {
  if (action.type === ACTION_TYPE.SIGN_IN) {
    return action.payload;
  }

  if (action.type === ACTION_TYPE.SIGN_OUT) {
    return null;
  }
}
