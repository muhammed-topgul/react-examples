import {FETCH_POSTS} from "../common/env";
import jsonPlaceholder from "../service/jsonPlaceholder";

export const fetchPosts = () => {

    return function (dispatch, getState) {
        const promise = jsonPlaceholder.get('/posts');

        return {
            type: FETCH_POSTS,
            payload: promise
        }
    }
}
