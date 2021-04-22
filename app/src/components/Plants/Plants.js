import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlants } from '../../actions';

const Plants = (props) => {
    const { isLoading, plants, getPlants } = props;

    useEffect(() => {
        getPlants();
    }, [getPlants]);

    return (
        <div>
            <h1>Plants</h1>
            {
                !isLoading &&
                plants.map((plant) => {
                    return (
                        <div>{plant}</div> // Add plant component
                    )
                })
            }
        </div>
    );
}
 
const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    plants: state.plants
});

export default connect(mapStateToProps, {getPlants})(Plants);