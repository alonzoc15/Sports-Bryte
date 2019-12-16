export const createSport = (sport) => {
    return ( dispatch, getState, { getFirebase, getFirestore } ) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('sports').add({
            ...sport,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_SPORT', sport });
        }).catch((err) => {
            dispatch({ type: 'CREATE_SPORT_ERROR', err});
        })

    }
}