import firebase from 'firebase'

export const config = {
    apiKey: 'AIzaSyDJC6V-1-gCf9H1vX_KSlSuiO0WVFWVx5I',
    authDomain: 'lunchapp-e3a2d.firebaseapp.com',
    databaseURL: 'https://lunchapp-e3a2d.firebaseio.com',
    projectId: 'lunchapp-e3a2d',
    storageBucket: 'lunchapp-e3a2d.appspot.com',
    messagingSenderId: '528495793704'
}
firebase.initializeApp(config)
// var firebaseRef = firebase.database().ref()
export default firebase
