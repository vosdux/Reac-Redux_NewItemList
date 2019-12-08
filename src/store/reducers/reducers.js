import * as types from '../actions/actions';

export const itemFetchFailed = (state = {failed: false, errorText: ''}, action) => {
    switch(action.type) {
        case types.ITEM_FETCH_FAILED:
            return action.payload
        default:
            return state
    }
};

export const itemLoading = (state = false, action) => {
    switch(action.type) { 
        case types.ITEM_LOADING:
            return action.payload.loading
        default:
            return state
    }
};

export const itemFetchSucces = (state = [], action) => {
    switch(action.type) {
        case types.ITEM_FETCH_SUCCES:
            return action.payload.items
        default:
            return state
    }
};