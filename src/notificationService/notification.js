var isPushEnabled

export const checkSWavailable = function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('.../dist/service-worker.js')
            .then(initialiseState)
    } else {
        console.warn('Service workers aren\'t supported in this browser.')
    }
}

export const initialiseState = function () {
    if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
        console.warn('Notifications aren\'t supported.')
        return
    }
    if (Notification.permission === 'denied') {
        console.warn('The user has blocked notifications.')
        return
    }
    if (!('PushManager' in window)) {
        console.warn('Push messaging isn\'t supported.')
        return
    }
    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        // Do we already have a push message subscription?
        serviceWorkerRegistration.pushManager.getSubscription()
            .then(function (subscription) {
                if (!subscription) {
                    return
                }
                sendSubscriptionToServer(subscription)
                isPushEnabled = true
            })
            .catch(function (err) {
                console.warn('Error during getSubscription()', err)
            })
    })
}

export const subscribe = function () {
    navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
        serviceWorkerRegistration.pushManager.subscribe()
            .then(function (subscription) {
                isPushEnabled = true
                return sendSubscriptionToServer(subscription)
            })
            .catch(function (e) {
                if (Notification.permission === 'denied') {
                    console.warn('Permission for Notifications was denied')
                } else {
                    console.error('Unable to subscribe to push.', e)
                }
            })
    })
}

export const sendSubscriptionToServer = function (sub) {
    if (isPushEnabled) {
        console.log(sub)
    }
}

/* var fabPushElement = document.querySelector('.fab__push')
var fabPushImgElement = document.querySelector('.fab__image')
export const changePushStatus = function (status) {
    fabPushElement.dataset.checked = status
    fabPushElement.checked = status
    if (status) {
        fabPushElement.classList.add('active')
        fabPushImgElement.src = '../img/on.png'
    } else {
        fabPushElement.classList.remove('active')
        fabPushImgElement.src = '../img/off.png'
    }
} */

// zum erhalten von Pushbenachrichtungen
/* export const subscribe = function () {
    navigator.serviceWorker.ready.then(function (registration) {
        if (!registration.pushManager) {
            alert('Your browser doesn\'t support push notification.')
            return false
        }
        // To subscribe `push notification` from push manager
        registration.pushManager.subscribe({
            userVisibleOnly: true // Always show notification when received
        })
            .then(function (subscription) {
                alert('Subscribed successfully.') // vorher toast
                console.info('Push notification subscribed.')
                console.log(subscription)
                // saveSubscriptionID(subscription);
                // changePushStatus(true)
            })
            .catch(function (error) {
                // changePushStatus(false)
                console.error('Push notification subscription error: ', error)
            })
    })
} */
