import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {removeService, selectServiceField} from "../actions/actionCreators";

function ServiceList() {
    const search = useSelector(state => state.serviceSearch);
    const items = useSelector(state => {
        const searchValue = search.search;
        if (searchValue) {
            return state.serviceList.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        } else {
            return state.serviceList
        }
    });
    const dispatch = useDispatch();
    const handleRemove = id => {
        dispatch(removeService(id));
    }
    const onSelectItem = (item) => {
        dispatch(selectServiceField(item))
    }

    return (<ul>
            {items.map(o => <li key={o.id}>
                <span>{o.name} {o.price}</span>
                <button onClick={() => onSelectItem(o)} key={o.id}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
                </button>
                <button onClick={() => handleRemove(o.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                </button>
            </li>)}
        </ul>
    )
}

export default ServiceList;
