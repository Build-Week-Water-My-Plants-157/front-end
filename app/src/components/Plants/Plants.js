import React from 'react';
import { connect } from 'react-redux';

const Plants = (props) => {
    const { user } = props;

    return (
        <div>
            <h1>Plants</h1>
            {
                user &&
                user.plants.map((plant) => {
                    return (
                        <div>{plant}</div> // Add plant component
                    )
                })
            }
        </div>
    );
}
 
const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, {})(Plants);