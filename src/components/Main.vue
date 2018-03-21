<template>
    <v-app>
        <v-toolbar app>
            
        </v-toolbar>
        <v-content>
            <LunchList />
        </v-content>
        <v-bottom-nav app :value="true" color="transparent">
            <v-btn v-for="day in days" :key="day" flat>
                <span>{{ getDay(day) }}</span>
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
    components: { LunchList, ShareBanner, SurveyBanner },
    computed: {
        days (startDate) {
            // Just for testing
            const firstDate = 190193118712
            let days = []
            for (let i = 0; i < 5; i++) {
                let date = firstDate + i
                days.push(date)
            }
            return days
        }
    },
    methods: {
        getDay (timestampDay) {
            console.log(Math.floor(Date.now() / 1000 / 60 / 60 / 24))
            const timestamp = timestampDay * 1000 * 60 * 60 * 24
            const day = new Date(timestamp).getDay()
            switch (day) {
            case 0:
                return 'Mo'
            case 1:
                return 'Di'
            case 2:
                return 'Mi'
            case 3:
                return 'Do'
            case 4:
                return 'Fr'
            case 5:
                return 'Sa'
            case 6:
                return 'So'
            default:
                return ''
            }
        }
    }
}
</script>

<style scoped>
.content {
    max-height: 100vh;
}
</style>
