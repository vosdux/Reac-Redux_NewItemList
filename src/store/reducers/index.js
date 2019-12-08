import { itemFetchFailed, itemLoading, itemFetchSucces } from './reducers';
import { combineReducers } from 'redux';

export default combineReducers({
    itemFetchFailed,
    itemLoading,
    itemFetchSucces
});