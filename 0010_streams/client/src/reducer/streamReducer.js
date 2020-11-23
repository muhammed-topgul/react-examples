import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM} from "../common/env";
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload}

        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload}

        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload}

        case DELETE_STREAM:
            // return {...state, id: undefined}
            return _.omit(state ,action.payload)

        default:
            return state;
    }
}