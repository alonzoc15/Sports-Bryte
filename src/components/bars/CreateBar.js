import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBar } from '../../store/actions/barActions';
import { Redirect } from 'react-router-dom';

class CreateBar extends Component {
    state = {
            title: '',
            content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createBar(this.state)
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Create New Reservation</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Bar Event</label>
                        <input type='text' id='title' onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Bar Info</label>
                        <textarea id='content' className='materialize-textarea' onChange={this.handleChange}></textarea>
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBar: (bar) => dispatch(createBar(bar))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBar);