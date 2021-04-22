import {
    START_FETCHING,
    FETCHING_PLANTS_SUCCESS,
    FETCH_ERROR
} from '../actions';

export const initialState = {
    isLoading: false,
    plants: [],
    fetchError: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_PLANTS_SUCCESS:
            return {
                ...state,
                plants: action.payload,
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