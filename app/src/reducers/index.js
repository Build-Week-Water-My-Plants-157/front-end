import {
    START_FETCHING,
    FETCHING_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
    CREATE_PLANT_SUCCESS,
    UPDATE_PLANT_SUCCESS,
    DELETE_PLANT_SUCCESS,
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
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case CREATE_PLANT_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case UPDATE_PLANT_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        case DELETE_PLANT_SUCCESS:
            return {
                ...state,
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