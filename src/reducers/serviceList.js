import { nanoid } from 'nanoid'

import {ADD_SERVICE, EDIT_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes'
const initialState = [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
];
export default function serviceList(state = initialState, action) {
    if (action.type === ADD_SERVICE) {
        const {name, price} = action.payload;
        return [...state, {id: nanoid(), name, price: Number(price)}];
    } else if (action.type === EDIT_SERVICE) {
        const {id, name, price} = action.payload;
        const modifiedState = [...state];
        const index = modifiedState.findIndex(item => item.id === id);
        modifiedState[index] = {id, name, price};
        return modifiedState;
    } else if (action.type === REMOVE_SERVICE) {
        const {id} = action.payload;
        return state.filter(service => service.id !== id);
    } else {
        return state;
    }
}
