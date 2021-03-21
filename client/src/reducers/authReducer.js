import { SIGN_IN, SIGN_OUT } from "../actions/types";

const INITAL_STATE = {
  isSigned: null,
  userId: null,
};
// eslint-disable-next-line
export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSigned: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSigned: false, userId: null };
    default:
      return state;
  }
};
