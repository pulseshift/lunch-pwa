export const isPushSupported = function () {
    // To check `push notification` permission is denied by user
    if (Notification.permission === 'denied') {
        alert('User has blocked push notification.')
        return
    }
    // Check `push notification` is supported or not
    if (!('PushManager' in window)) {
        alert('Sorry, Push notification isn\'t supported in your browser.')
        return
    }
    // Get `push notification` subscription
    // If `serviceWorker` is registered and ready
    navigator.serviceWorker.ready
        .then(function (registration) {
            registration.pushManager.getSubscription()
                .then(function (subscription) {
                    if (subscription) {
                        // changePushStatus(true)
                    } else {
                        // changePushStatus(false)
                    }
                })
                .catch(function (error) {
                    console.error('Error occurred while enabling push ', error)
                })
        })
}

export const changePushStatus = function (status) {
    // Changing the global variable status to true if push is supported and allowed
}
