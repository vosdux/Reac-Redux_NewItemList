import * as types from './actions';
import axios from 'axios';

export const itemsFetchDataSucces = (items) => {
    return {
        type: types.ITEM_FETCH_SUCCES,
        payload: {
            items
        }
    };
};

export const itemsLoading = (bool) => {
    console.log(bool)
    return {
        type: types.ITEM_LOADING,
        payload: {
            loading: bool
        }
    };
};

export const itemsFetchDataFailed = (bool, text) => {
    return {
        type: types.ITEM_FETCH_FAILED,
        payload: {
            failed: bool,
            errorText: text
        }
    };
};

export const errorAfterFiveSec = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(itemsFetchDataFailed(true, 'Это ошибка запущена специально'))
        }, 5000);
    };
};

export const itemsFetch = (url) => {
    return dispatch => {
        dispatch(itemsLoading(true));

        axios.get(url)
            .then(response => {
                dispatch(itemsLoading(false));
                return response.data
            })
            .then(items => dispatch(itemsFetchDataSucces(items)))
            .catch((err) => dispatch(itemsFetchDataFailed(true, err.message)));
    };
};