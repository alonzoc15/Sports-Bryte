import React, { Component } from 'react';
import Reservations from './Reservations';
import SportList from '../sports/SportList';
import { connect } from 'react-redux';
import { firstoreConnect, firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { sports, auth, reservations } = this.props
        if (!auth.uid) return <Redirect to='/signIn' />

        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <SportList sports={ sports } />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Reservations reservations={ reservations } />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        sports: state.firestore.ordered.sports,
        auth: state.firebase.auth,
        reservations: state.firestore.ordered.reservations
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'sports', orderBy: ['createdAt', 'desc']},
        { collection: 'reservations', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);
