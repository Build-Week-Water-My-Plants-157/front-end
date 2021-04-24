import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPlant } from '../../actions';

const initialPlant = {
    nickname: '',
    species: '',
    h2o_frequency: '',
    image: ''
}

const CreatePlant = (props) => {
    const [plant, setPlant] = useState(initialPlant);
    const history = useHistory();

    const handleChange = (event) => {
        setPlant({
            ...plant,
            [event.target.name]: event.target.value
        });
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPlant(plant);
        history.push('/plants');
    }

    return (
        <div>
            <h1>Create Plant</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Nickname
                    <input 
                        type="text"
                        name="nickname"
                        value={plant.nickname}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Species
                    <input 
                        type="text"
                        name="species"
                        value={plant.species}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    H2O Frequency
                    <input 
                        type="text"
                        name="h2o_frequency"
                        value={plant.h2o_frequency}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Image
                    <input 
                        type="text"
                        name="image"
                        value={plant.image}
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading
});

export default connect(mapStateToProps, {createPlant})(CreatePlant);