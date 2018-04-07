import firebase from 'firebase'

var MsgElem = document.getElementById('msg')
var TokenElem = document.getElementById('token')
var NotisElem = document.getElementById('notis')
var ErrElem = document.getElementById('err')

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

export const messaging = firebase.messaging()
messaging
    .requestPermission()
    .then(function () {
        MsgElem.innerHTML = 'Notification permission granted.'
        console.log('Notification permission granted.')

        return messaging.getToken()
    })
    .then(function (token) {
        TokenElem.innerHTML = 'token is : ' + token
    })
    .catch(function (err) {
        ErrElem.innerHTML = ErrElem.innerHTML + '; ' + err
        console.log('Unable to get permission to notify.', err)
    })

messaging
    .onMessage(function (payload) {
        console.log('Message received. ', payload)
        NotisElem.innerHTML = NotisElem.innerHTML + JSON.stringify(payload)
    })
