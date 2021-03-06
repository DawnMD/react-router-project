import _ from "lodash";
import {
  CREATE_STREAM,
  EDIT_STREAM,
  LIST_STREAMS,
  DELETE_STREAM,
  FETCH_STREAM,
} from "../actions/types";
// eslint-disable-next-line
export default (state = {}, action) => {
  switch (action.type) {
    case LIST_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
