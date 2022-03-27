import React, {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {searchSearchField} from "../actions/actionCreators";

function ServiceSearch() {
    const item = useSelector(state => state.serviceSearch.search);

    const dispatch = useDispatch();
    const handleChange = (event) => {
        event.preventDefault();
        dispatch(searchSearchField({search: event.target.value}))
    }
    return (
        <Fragment>
            <form>
                <label>Search <input name='search' onChange={handleChange} value={item} /></label>
            </form>
        </Fragment>
    )
}

export default ServiceSearch;
