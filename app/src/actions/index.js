import axiosWithAuth from '../utils/axiosWithAuth';
const axios = axiosWithAuth();

export const START_FETCHING = 'START_FETCHING';
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getUser = (id) => (dispatch) => {
    dispatch({
        type: START_FETCHING
    });
    console.log('user id', id)
    axios.get(`http://localhost:5000/api/users/${id}`)
    .then((response) => {
        console.log('user response', response);
        dispatch({
            type: FETCHING_USER_SUCCESS,
            payload: response.data
        });
    })
    .catch((error) => {
        console.log(error);
        dispatch({
            type: FETCH_ERROR,
            payload: error.message
        });
    })
}