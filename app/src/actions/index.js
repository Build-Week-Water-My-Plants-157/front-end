import axiosWithAuth from '../utils/axiosWithAuth';
const axios = axiosWithAuth();

export const START_FETCHING = 'START_FETCHING';
export const FETCHING_PLANTS_SUCCESS = 'FETCHING_PLANTS_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getPlants = () => (dispatch) => {
    dispatch({
        type: START_FETCHING
    });
    axios.get('/api/plants')
    .then((response) => {
        console.log(response);
        dispatch({
            type: FETCHING_PLANTS_SUCCESS,
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