self.addEventListener('push', function (event) {
    console.log('Received a push message', event)
    self.registration.showNotification('New Survey!', {
        body: 'We got a new survey ready!'
    })
})
