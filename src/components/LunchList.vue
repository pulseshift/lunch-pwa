<template>   
    <div class="scroll-container">     
        <v-container fluid grid-list-sm>
            <v-layout row wrap justify-center align-center>
                <Lunch ref="lunch" v-for="menu in orderedMenus" v-bind:key="menu.id" :menu="menu" :closeOther="closeOther" />
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Lunch from './Lunch'

export default {
    name: 'LunchList',
    components: { Lunch },
    computed: {
        orderedMenus () {
            return this.$store.getters.getMenuForDay('190193118712')
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
