import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes";

const initialstate = {
  isAuth: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
  token: "",
};
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload,
        isAuth: true,
      };
      default:

      return initialstate
  }
};
