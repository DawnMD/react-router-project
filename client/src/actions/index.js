import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  LIST_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM,
} from "./types";
import streams from "../apis/streams";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const res = await streams.post("/streams", { ...formValues, userId });
    dispatch({ type: CREATE_STREAM, payload: res.data });
    history.push("/");
  };
};

export const listStreams = () => {
  return async (dispatch) => {
    const res = await streams.get("/streams");
    dispatch({ type: LIST_STREAMS, payload: res.data });
  };
};

export const fetchStream = (id) => {
  return async (dispatch) => {
    const res = await streams.get(`/streams/${id}`);
    dispatch({ type: FETCH_STREAM, payload: res.data });
  };
};

export const editStream = (id, formValues) => {
  return async (dispatch) => {
    const res = await streams.patch(`/streams/${id}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: res.data });
    history.push("/");
  };
};

export const deleteStream = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`);
    dispatch({ type: DELETE_STREAM, payload: id });
    history.push("/");
  };
};
