const postSubscription = {
    methods: {
        postSubscription (subscription) {
            // const newSubscription = JSON.parse(JSON.stringify(subscription))
            this.$root.$firebaseRefs.subscriptions.push(subscription)
                .catch(function (e) {
                    console.error(e)
                })
        }
    }
}

export default postSubscription
