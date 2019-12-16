import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSport } from '../../store/actions/sportActions';
import { Redirect } from 'react-router-dom';

class CreateSport extends Component {
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
        this.props.createSport(this.state)
        this.props.history.push('/');
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signIn' />

        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Create New Sport</h5>
                    <div className='input-field'>
                        <label htmlFor='title'>Sport Event</label>
                        <input type='text' id='title' onChange={this.handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='content'>Sport Info</label>
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
        createSport: (sport) => dispatch(createSport(sport))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSport);