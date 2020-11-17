import {FETCH_POSTS, FETCH_USER} from "../common/env";
import jsonPlaceholder from "../service/jsonPlaceholder";

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');
    dispatch({type: FETCH_POSTS, payload: response.data});
}

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type: FETCH_USER, payload: response.data});
}