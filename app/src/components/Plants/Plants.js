import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../actions';

const Plants = (props) => {
    const { user } = props;

    useEffect(() => {
        props.getUser(localStorage.getItem('userId'));
    }, []);

    return (
        <div>
            <h1>Plants</h1>
            {
                user &&
                user.plants.map((plant) => {
                    return (
                        <div key={plant.id}>{plant.nickname}</div> // Add plant component
                    )
                })
            }
        </div>
    );
}
 
const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    user: state.user
});

export default connect(mapStateToProps, {getUser})(Plants);