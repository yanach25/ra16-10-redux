import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {addService, changeServiceField, editService} from "../actions/actionCreators";

function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = event => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value));
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (item.id) {
            Promise.all([
                dispatch(editService(item.id, item.name, item.price)),
                dispatch(changeServiceField('', '')),
            ])
        } else {
            Promise.all([
                dispatch(addService(item.name, item.price)),
                dispatch(changeServiceField('', '')),
            ])
        }
    }
    const handleCancel = event => {
        event.preventDefault();
        dispatch(changeServiceField('', ''));
    }

    return ( <form onSubmit={handleSubmit}>
        <input name='id' type="hidden" onChange={handleChange} value={item.id} />
        <label>Name <input name='name' onChange={handleChange} value={item.name} /></label>
        <label>Price <input name='price' onChange={handleChange} value={item.price} /></label>
        <button type='submit'>Save</button>
        {item.id || item.name || item.value ? <button onClick={handleCancel}>Cancel</button> : ''}
    </form>)}

export default ServiceAdd;
