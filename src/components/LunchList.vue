<template>   
    <div class="scroll-container" v-show="!isEmtpy">     
        <v-container fluid grid-list-sm>
            <SurveyBanner :closeSurveyBanner="closeSurveyBanner" v-show="showSurveyBanner"/>  
            <ShareBanner :closeShareBanner="closeShareBanner" v-show="showShareBanner"/>
            <v-layout row wrap justify-center align-center>
                <Lunch ref="lunch" v-for="menu in getMenu" v-bind:key="menu.id" :menu="menu" :closeOther="closeOther" />
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Lunch from './Lunch'
import SurveyBanner from './SurveyBanner'
import ShareBanner from './ShareBanner'

export default {
    name: 'LunchList',
    components: { Lunch, SurveyBanner, ShareBanner },
    props: ['cantine', 'day'],
    created: function () {
        var randInt = Math.random()
        if (navigator.onLine) {
            if (randInt > 0.75) {
                this.showSurveyBanner = true
            } else if (randInt > 0.5) {
                this.showShareBanner = true
            }
        } else {
            if (randInt > 0.75) {
                this.showShareBanner = true
            }
        }
    },
    data: function () {
        return {
            showSurveyBanner: false,
            showShareBanner: false
        }
    },
    watch: {
        day: function () {
            this.closeOther(null)
        },
        cantine: function () {
            this.closeOther(null)
        }
    },
    computed: {
        isEmtpy () {
            if (this.cantine !== undefined && this.day !== undefined) {
                return false
            } else {
                return true
            }
        },
        getMenu () {
            if (this.cantine !== undefined && this.day !== undefined) {
                return this.cantine.days[this.day].menu
            } else {
                return null
            }
        },
        getOpeningTimes () {
            if (this.cantine !== undefined && this.day !== undefined) {
                return this.cantine.days[this.day].openingtimes
            } else {
                return null
            }
        }
    },
    methods: {
        closeOther: function (component) {
            for (let ref in this.$refs.lunch) {
                const child = this.$refs.lunch[ref]
                if (child !== component) {
                    child.show = false
                }
            }
        },
        closeSurveyBanner: function () {
            this.showSurveyBanner = false
        },
        closeShareBanner: function () {
            this.showShareBanner = false
        }
    }
}
</script>

<style scoped>
.scroll-container {
    height: 100%;
    overflow-y: scroll;
    backface-visibility: hidden;
}
</style>
