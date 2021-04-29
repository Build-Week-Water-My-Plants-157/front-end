import {
    START_FETCHING,
    SIGNUP,
    LOGIN,
    FETCHING_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
    CREATE_PLANT_SUCCESS,
    UPDATE_PLANT_SUCCESS,
    DELETE_PLANT_SUCCESS,
    FETCH_ERROR,
    LOGOUT,
    CLEAR_ERROR
} from '../actions';

export const initialState = {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    fetchError: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        case SIGNUP:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case LOGIN: 
            return {
                ...state,
                isLoggedIn: true,
                fetchError: null,
                isLoading: false
            }
        case FETCHING_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                fetchError: null,
                isLoading: false
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                fetchError: null,
                isLoading: false
            }
        case CREATE_PLANT_SUCCESS:
            return {
                ...state,
                user: action.payload,
                fetchError: null,
                isLoading: false
            }
        case UPDATE_PLANT_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    plants: state.user.plants.map((plant) => {
                        if (String(plant.id) === String(action.payload.id)) {
                            return action.payload;
                        }
                        return plant;
                    })
                },
                fetchError: null,
                isLoading: false
            }
        case DELETE_PLANT_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    plants: state.user.plants.filter((plant) => {
                        return plant.id !== action.payload.id;
                    })
                },
                fetchError: null,
                isLoading: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                fetchError: action.payload,
                isLoading: false
            }
        case LOGOUT: 
            return initialState
        case CLEAR_ERROR:
            return {
                ...state,
                fetchError: false
            }
        default: 
            return state
    }
}