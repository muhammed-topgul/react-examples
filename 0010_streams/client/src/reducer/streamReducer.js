import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from "../common/env";
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            // normalde action.payload bir array doner
            // lodash ile ben donen arrayde ki verileri id ile mapleyerek yeni bir obje olusturuyorum
            return {...state, ..._.mapKeys(action.payload, 'id')}

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