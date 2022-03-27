import {CHANGE_SERVICE_FIELD, SELECT_SERVICE_FIELD} from '../actions/actionTypes'
const initialState = {
    id: '',
    name: '',
    price: '',
};
export default function serviceAddReducer(state = initialState, action) {
    if (action.type === CHANGE_SERVICE_FIELD) {
        const {name, value} = action.payload;
        if (!name && !value) {
            return initialState;
        }
        return {...state, [name]: value};
    } else if (action.type === SELECT_SERVICE_FIELD) {
        const state = action.payload;
        return {...state};
    } else {
        return state;
    }
}
