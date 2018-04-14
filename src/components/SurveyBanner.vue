<template>
    <v-layout>
        <v-flex xs12 sm12>
            <v-card>
            <v-container fill-height fluid>
                <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                        <span class="headline">Unternehmensumfrage</span>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-card-title>
                <div>
                    <span class="red--text">Mach mit!</span><br>
                    <span>Du wurdest auserwählt, an einer Unternehmens&shy;umfrage teilzunehmen. Nutze jetzt die Chance, deine Meinung zu äußern.</span><br>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn flat v-on:click="closeSurveyBanner()" color="grey">Später</v-btn>
                <v-btn flat v-on:click="goToSurvey" color="red">Teilnehmen</v-btn>
            </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: 'SurveyBanner',
    props: ['closeSurveyBanner'],
    methods: {
        goToSurvey: function (event) {
            this.$router.push({name: 'Survey'})
        }
    }
}
</script>

<style scoped>

</style>
