<template>            
    <v-container fluid grid-list-sm>
        <v-layout row wrap>
            <Lunch v-for="menu in orderedMenus" v-bind:key="menu.id" :menu="menu" />
        </v-layout>
    </v-container>
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

</style>
