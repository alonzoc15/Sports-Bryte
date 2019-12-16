import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const SportDetails = (props) => {
    const { sport, auth } = props;
    if (!auth.uid) return <Redirect to='/signIn' />

    if (sport) {
        return (
            <div className='container section sport-details'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>{ sport.title }</span>
                        <p>{ sport.content }</p>
                    </div>
                    <div className='card-action grey lighten-4 grey-text'>
                        <div>Posted By { sport.authorFirstName } { sport.authorLastName }</div>
                        <div>{moment(sport.createdAt.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='container center'>
                <p>Loading sport...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const sports = state.firestore.data.sports;
    const sport = sports ? sports[id] : null
    return {
        sport: sport,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'sports' }
    ])
)(SportDetails);