
const request = require('request-promise')

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
        // check if we already have a subscription
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
        // connection to firebase
        console.log(sub)
    }
}

// two different methodes necessary one for google one for firefox
export const notifyGoogleUser = function (id) {
    const google = require('./google-push-key.json')
    const options = {
        uri: 'https://android.googleapis.com/gcm/send',
        method: 'POST',
        json: true,
        headers: {
            authorization: `key=${google.key}`
        },
        resolveWithFullResponse: true,
        body: id
    }
    return request(options)
}

export const notifyFirefoxUser = function (userEndpoint) {
    const options = {
        method: 'POST',
        uri: userEndpoint,
        headers: {
            ttl: '60'
        }
    }
    return request(options)
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

    function unsubscribePush () {
        navigator.serviceWorker.ready
            .then(function (registration) {
            // Get `push subscription`
                registration.pushManager.getSubscription()
                    .then(function (subscription) {
                        // If no `push subscription`, then return
                        if (!subscription) {
                            alert('Unable to unregister push notification.')
                            return
                        }
                        // Unsubscribe `push notification`
                        subscription.unsubscribe()
                            .then(function () {
                                alert('Unsubscribed successfully.') // vorher toast
                                console.info('Push notification unsubscribed.')
                                console.log(subscription)
                                // deleteSubscriptionID(subscription);
                                changePushStatus(false)
                            })
                            .catch(function (error) {
                                console.error(error)
                            })
                    })
                    // .catch(function (error) {
                    //    console.error('Failed to unsubscribe push notification.')
                    // })
            })
} */
