import { createStore, combineReducers } from "redux";
import serviceList from "../reducers/serviceList";
import serviceAddReducer from "../reducers/serviceAdd";
import serviceSearchReducer from "../reducers/serviceSearch";

const reducer = combineReducers({
    serviceList: serviceList,
    serviceAdd: serviceAddReducer,
    serviceSearch: serviceSearchReducer,
});
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store;
