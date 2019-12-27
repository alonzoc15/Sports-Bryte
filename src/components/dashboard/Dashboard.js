import React, { Component } from 'react';
import Reservations from './Reservations';
import BarList from '../bars/BarList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        const { bars, auth, reservations } = this.props

        if (!auth.uid) return <Redirect to='/signIn' />

        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <BarList bars={ bars } />
                    </div>
                    <div className='col s12 m5 offset-m1'>
                        <Reservations reservations={ reservations } />
                    </div>
                    <div className='col s12 m5 offset-m2'>
                    
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bars: state.firestore.ordered.bars,
        auth: state.firebase.auth,
        reservations: state.firestore.ordered.reservations
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'bars', orderBy: ['createdAt', 'desc']},
        { collection: 'reservations', limit: 3, orderBy: ['time', 'desc']}
    ])
)(Dashboard);
