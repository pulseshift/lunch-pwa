<template>
    <v-app>
        <v-toolbar app color="teal">
            <v-layout wrap>
                 <v-flex xs8 offset-xs2>
                    <div class="center-me">
                        <v-select
                        :items="cantines"
                        v-model="cantine"
                        item-text="title"
                        single-line
                        label="Kantine"    
                        dark                    
                        ></v-select>
                    </div>
                 </v-flex>
            </v-layout>

        </v-toolbar>
        <v-content>
            <LunchList v-bind:cantine="cantine" v-bind:day="day" />
        </v-content>
        <v-bottom-nav app :value="true" color="teal" :active.sync="day">
            <v-btn dark v-for="day in days" :key="day" flat :value="day">
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
    data: function () {
        return {
            cantine: undefined,
            day: 17610
        }
    },
    mounted () {
        this.cantine = this.cantines[0]
    },
    computed: {
        days (startDate) {
            // Just for testing
            const firstDate = 17611
            let days = []
            for (let i = 0; i < 5; i++) {
                let date = firstDate + i
                days.push(date)
            }
            return days
        },
        cantines () {
            return this.$store.getters.getCantines()
        }
    },
    methods: {
        getDay (timestampDay) {
            const timestamp = timestampDay * 1000 * 60 * 60 * 24
            const day = new Date(timestamp).getDay()
            switch (day) {
            case 0:
                return 'So'
            case 1:
                return 'Mo'
            case 2:
                return 'Di'
            case 3:
                return 'Mi'
            case 4:
                return 'Do'
            case 5:
                return 'Fr'
            case 6:
                return 'Sa'
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

.center-me {
  margin: 0 auto;
}
</style>
