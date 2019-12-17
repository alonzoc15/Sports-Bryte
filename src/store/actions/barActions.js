export const createBar = (bar) => {
    return ( dispatch, getState, { getFirebase, getFirestore } ) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('bars').add({
            ...bar,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_BAR', bar });
        }).catch((err) => {
            dispatch({ type: 'CREATE_BAR_ERROR', err});
        })

    }
}