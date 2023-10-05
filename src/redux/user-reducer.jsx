const LOGIN_USER = "LOGIN_USER";

const initialState = {
  user: {
    is_logged: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    default:
      return state;
  }
};

export const loginUserAction = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export default userReducer;
