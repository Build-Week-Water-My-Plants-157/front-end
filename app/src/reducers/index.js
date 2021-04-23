import {
    START_FETCHING,
    FETCHING_USER_SUCCESS,
    FETCH_ERROR
} from '../actions';

export const initialState = {
    isLoading: false,
    user: null,
    fetchError: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                fetchError: action.payload,
                isLoading: false
            }
        default: 
            return state
    }
}