import authReducer from './authReducer';
import sportReducer from './sportReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    sport: sportReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;