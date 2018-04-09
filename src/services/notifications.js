export const subscribe = async function () {
    try {
        let serviceWorkerRegistration = await navigator.serviceWorker.ready
        if (Notification.permission !== 'granted') {
            await Notification.requestPermission()
        }
        let subscription = await serviceWorkerRegistration.pushManager.subscribe({
            userVisibleOnly: true
        })
        console.log(subscription)
        return subscription
    } catch (e) {
        if (Notification.permission === 'denied') {
            console.warn('Permission for Notifications was denied')
        } else {
            console.error('Unable to subscribe to push.', e)
        }
        return null
    }
}

export const unsubscribe = function () {
    navigator.serviceWorker.ready
        .then(function (serviceWorkerRegistration) {
            serviceWorkerRegistration.pushManager.getSubscription()
                .then(function (pushSubscription) {
                    serviceWorkerRegistration.unregister()
                        .then(function (success) {
                            console.log('Service worker removal was completed? ', success)
                        })
                    pushSubscription.unsubscribe()
                        .catch(function (e) {
                            console.log('Unsubscription error: ', e)
                        })
                })
        })
}

export const isSubscribed = async function () {
    let serviceWorkerRegistration = await navigator.serviceWorker.ready
    let isSubscribed = !(serviceWorkerRegistration === null)
    return isSubscribed
}
