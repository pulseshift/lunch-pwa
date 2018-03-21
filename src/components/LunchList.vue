<template>   
    <div class="scroll-container">     
        <v-container fluid grid-list-sm>
            <v-layout row wrap justify-center align-center>
                <Lunch v-for="menu in orderedMenus" v-bind:key="menu.id" :menu="menu" />
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
            return this.$lodash.orderBy(this.$store.state.days['190193118712'], 'rank')
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
