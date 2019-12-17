const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello, Alonzo");
});

const createReservation = (reservation => {
    return admin.firestore().collection('reservations')
        .add(reservation)
        .then(doc => console.log('reservation added', doc))
})

exports.barCreated = functions.firestore
    .document('bars/{barId}')
    .onCreate(doc => {
        
        const bar = doc.data();
        const reservation = {
            content: 'Added a new reservation',
            user: `${bar.authorFirstName} ${bar.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createReservation(reservation);
});

exports.userJoined = functions.auth.user()
    .onCreate(user => {

        return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc => {

            const newUser = doc.data();
            const reservation = {
                content: 'Joined the party',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createReservation(reservation)
        })
})