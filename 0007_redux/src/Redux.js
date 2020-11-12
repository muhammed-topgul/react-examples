import {accounting, claimHistory, policies} from "./Reducers";
import {createStore, combineReducers} from "redux";
import {createPolicy} from "./Action";

const ourDepartments = combineReducers({
    accounting: accounting,
    claimHistory: claimHistory,
    policies: policies
});

const store = createStore(ourDepartments);

const action = createPolicy('Alex', 20);

store.dispatch(action);

console.log(store.getState());




















