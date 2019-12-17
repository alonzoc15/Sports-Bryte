import authReducer from './authReducer';
import barReducer from './barReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    bar: barReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;