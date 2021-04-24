import axiosWithAuth from '../utils/axiosWithAuth';
const axios = axiosWithAuth();

export const START_FETCHING = 'START_FETCHING';
export const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const CREATE_PLANT_SUCCESS = 'CREATE_PLANT_SUCCESS';
export const UPDATE_PLANT_SUCCESS = 'UPDATE_PLANT_SUCCESS';
export const DELETE_PLANT_SUCCESS = 'DELETE_PLANT_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getUser = (id) => (dispatch) => {
    dispatch({
        type: START_FETCHING
    });
    axios.get(`https://tt157-backend.herokuapp.com/api/users/${id}`)
    .then((response) => {
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

export const updateUser = (user) => (dispatch) => {
    dispatch({
        type: START_FETCHING
    });
    axios.put(`https://tt157-backend.herokuapp.com/api/users/${user.id}`, user)
    .then((response) => {
        dispatch({
            type:  UPDATE_USER_SUCCESS,
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

export const createPlant = (plant) => (dispatch) => {
    dispatch({
        type: START_FETCHING
    });
    axios.post('https://tt157-backend.herokuapp.com/api/plants', plant)
    .then((createdPlant) => {
        const id = localStorage.getItem('userId');
        axios.post(`https://tt157-backend.herokuapp.com/api/users/${id}`, {plant_id: createdPlant.data.data.id})
        .then((updatedUser) => {
            dispatch({
                type: CREATE_PLANT_SUCCESS,
                payload: updatedUser.data
            });
        })
    })
    .catch((error) => {
        console.log(error);
        dispatch({
            type: FETCH_ERROR,
            payload: error.message
        });
    })
}

export const updatePlant = (plant) => (dispatch) => {
    dispatch({
        type: START_FETCHING
    });
    axios.put(`https://tt157-backend.herokuapp.com/api/plants/${plant.id}`, plant)
    .then((response) => {
        dispatch({
            type: UPDATE_PLANT_SUCCESS,
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

export const deletePlant = (plant) => (dispatch) => {
    dispatch({
        type: START_FETCHING
    });
    axios.delete(`https://tt157-backend.herokuapp.com/api/plants/${plant.id}`)
    .then((response) => {
        dispatch({
            type: DELETE_PLANT_SUCCESS,
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