import {CREATE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, SIGN_IN, SIGN_OUT} from "../common/env";
import streams from "../service/streams";
import history from "../common/history";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    // getState redux' ta ki butun verileri alir
    const {userId} = getState().auth;
    // formValues' e userId elementini mergeledim
    const response = await streams.post('/streams', {...formValues, userId});

    dispatch({
        type: CREATE_STREAM,
        payload: response.data
    });

    history.push('/')
}

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({
        type: FETCH_STREAMS,
        payload: response.data
    });
}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({
        type: FETCH_STREAM,
        payload: response.data
    });
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);

    dispatch({
        type: EDIT_STREAM,
        payload: response.data
    });

    history.push('/')
}

export const deleteStream = (id) => async dispatch => {
    const response = await streams.delete(`/streams/${id}`);

    dispatch({
        DELETE_STREAM,
        payload: response.data
    });
}
