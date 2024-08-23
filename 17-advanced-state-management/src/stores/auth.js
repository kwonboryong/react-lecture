export const INITIAL_AUTH_INFO = {
  user: null,
  token: null,
};

const ACTION_TYPES = {
  SET: '@auth/set',
  RESET: '@auth/reset',
};

export const setAuth = (authInfo) => ({
  type: ACTION_TYPES.SET,
  payload: authInfo,
});

export const resetAuth = () => ({
  type: ACTION_TYPES.RESET,
});

const authReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET: {
      const authInfo = action.payload; 

      return { ...state, ...authInfo };
    }

    case ACTION_TYPES.RESET: {
      return INITIAL_AUTH_INFO;
    }

    default: 
      return state;
  }
};

export default authReducer;
