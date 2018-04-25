import firebase from 'firebase'

var config = {
    apiKey: 'AIzaSyDJC6V-1-gCf9H1vX_KSlSuiO0WVFWVx5I',
    authDomain: 'lunchapp-e3a2d.firebaseapp.com',
    databaseURL: 'https://lunchapp-e3a2d.firebaseio.com',
    projectId: 'lunchapp-e3a2d',
    storageBucket: 'lunchapp-e3a2d.appspot.com',
    messagingSenderId: '528495793704'
}
firebase.initializeApp(config)

const database = firebase.database()
const messaging = firebase.messaging()
messaging.usePublicVapidKey('BBZWUch3aJOv6dS7xYN7DPy0GD0K11tNxZY0YOPdtbiIXrVjTSfmkPYNw6vGBx5jvCII-ZVkRX52yUz2gbPq6Mg')

export {
    database,
    messaging
}
