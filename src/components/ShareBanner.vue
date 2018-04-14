<template>
    <v-layout>
        <v-flex xs12 sm12>
            <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
                <v-card>
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">Gefällt dir die App?</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-card-title>
                        <div>
                            <span class="red--text">Jetzt teilen!</span><br>
                            <span>Teile die App mit deinen Kollegen jetzt per E-Mail oder in den sozialen Netzwerken.</span><br><br>
                            <v-container fluid grid-list-xs>
                                <v-layout justify-space-center>
                                    <v-flex xs3 order-sm2 order-md1>
                                        <network network="email">
                                            <i class="fa fa-envelope"></i> <img height="45px" src="/static/img/icons/email.png">
                                        </network>
                                    </v-flex>
                                    <v-flex xs3 order-sm2 order-md2>
                                        <network network="facebook">
                                            <i class="fa fa-facebook"></i> <img height="45px" src="/static/img/icons/facebook.svg">
                                        </network>
                                    </v-flex>
                                    <v-flex xs3 order-sm2 order-md2>
                                        <network network="whatsapp">
                                            <i class="fa fa-whatsapp"></i> <img height="45px" src="/static/img/icons/whatsapp.svg">
                                        </network>
                                    </v-flex>
                                    <v-flex xs3 order-sm2 order-md2>
                                        <network network="linkedin">
                                            <i class="fa fa-linkedin"></i> <img height="45px" src="/static/img/icons/linkedin.svg">
                                        </network>
                                    </v-flex>
                                    <v-flex xs3 order-sm2 order-md2>
                                        <network network="twitter">
                                            <i class="fa fa-twitter"></i> <img height="45px" src="/static/img/icons/twitter.svg">
                                        </network>
                                    </v-flex>
                                    <v-flex xs3 order-sm2 order-md2>
                                        <network network="skype">
                                            <i class="fa fa-skype"></i> <img height="45px" src="/static/img/icons/skype.svg">
                                        </network>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat v-on:click="closeShareBanner" color="grey">Später</v-btn>
                    </v-card-actions>
                </v-card>
            </social-sharing>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'ShareBanner',
    methods: {
        closeShareBanner: function (event) {
            alert('todo: close')
        }
    }
}
</script>

<style scoped>

</style>
