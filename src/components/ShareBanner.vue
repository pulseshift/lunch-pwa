<template>
    <v-layout>
        <v-flex xs12 sm12>
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
                                        <social-sharing url="https://lunchapp-e3a2d.firebaseapp.com"
                                        title="The Lunch App"
                                        description="Provides detailed lunch descriptions including prices and additives for your cantine!"
                                        quote="Provides detailed lunch descriptions including prices and additives for your cantine!"
                                        hashtags="lunchapp"
                                        twitter-user="lunchapp"
                                        inline-template>
                                        <div>
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
                                        </div>
                                   </social-sharing>
                                </v-layout>
                            </v-container>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat v-on:click="closeShareBanner" color="grey">Später</v-btn>
                    </v-card-actions>
                </v-card>
            
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'ShareBanner',
    props: ['closeShareBanner']
}
</script>

<style scoped>

</style>
