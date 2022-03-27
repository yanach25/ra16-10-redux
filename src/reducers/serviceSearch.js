import {SEARCH_SEARCH_FIELD} from "../actions/actionTypes";

const initialState = {
    search: '',
};
export default function serviceSearchReducer(state = initialState, action) {
    if (action.type === SEARCH_SEARCH_FIELD) {
        const {search} = action.payload;
        return {...state, search};
    } else {
        return state;
    }
}
