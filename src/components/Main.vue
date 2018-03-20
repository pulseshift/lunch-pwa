<template>
    <v-app>
        <v-toolbar app>
            
        </v-toolbar>
        <v-content>
            <LunchList />
        </v-content>
        <v-bottom-nav app absolute :value="true" color="transparent">
            <v-btn flat>
                <span>Mo</span>
            </v-btn>
            <v-btn flat>
                <span>Di</span>
            </v-btn>
            <v-btn flat>
                <span>Mi</span>
            </v-btn>
            <v-btn flat>
                <span>Do</span>
            </v-btn>
            <v-btn flat>
                <span>Fr</span>
            </v-btn>
        </v-bottom-nav> 
    </v-app>
</template>

<script>
import LunchList from './LunchList'
import ShareBanner from './ShareBanner'
import SurveyBanner from './SurveyBanner'

export default {
    name: 'Main',
    components: { LunchList, ShareBanner, SurveyBanner }
}
</script>

<style scoped>

</style>
