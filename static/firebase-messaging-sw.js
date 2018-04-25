/* eslint-disable */
// self.addEventListener('push', function (event) {
//     console.log('Received a push message', event)
//     self.registration.showNotification('New Survey!', {
//         body: 'We got a new survey ready!'
//     })
// })
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js')

firebase.initializeApp({
    'messagingSenderId': 'BBZWUch3aJOv6dS7xYN7DPy0GD0K11tNxZY0YOPdtbiIXrVjTSfmkPYNw6vGBx5jvCII-ZVkRX52yUz2gbPq6Mg'
})

const messaging = firebase.messaging()

messaging.setBackgroundMessageHandler((payload) => {
    console.log(payload)
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body
    }
    return self.registration.showNotification(notificationTitle, notificationOptions)
})
