const postSubscription = {
    methods: {
        postSubscription (subscription) {
            // const newSubscription = JSON.parse(JSON.stringify(subscription))
            console.log('Posting')
            this.$root.$firebaseRefs.subscriptions.push(subscription)
                .catch(function (e) {
                    console.log('error')
                    console.error(e)
                })
        }
    }
}

export default postSubscription
