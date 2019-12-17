import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const BarDetails = (props) => {
    const { bar, auth } = props;
    if (!auth.uid) return <Redirect to='/signIn' />

    if (bar) {
        return (
            <div className='container section bar-details'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>{ bar.title }</span>
                        <p>{ bar.content }</p>
                    </div>
                    <div className='card-action grey lighten-4 grey-text'>
                        <div>Posted By { bar.authorFirstName } { bar.authorLastName }</div>
                        <div>{moment(bar.createdAt.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='container center'>
                <p>Loading bar...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const bars = state.firestore.data.bars;
    const bar = bars ? bars[id] : null
    return {
        bar: bar,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'bars' }
    ])
)(BarDetails);