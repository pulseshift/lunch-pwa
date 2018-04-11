<template>
    <v-app>
        <v-toolbar app color="teal">
            <v-toolbar-title>Survey</v-toolbar-title> 
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn @click="onDone" flat>Done</v-btn>
            </v-toolbar-items>                
        </v-toolbar>
        <v-content>
            <iframe seamless='seamless' frameBorder="0" class="frame" src="http://localhost:8000/feedback/#?mockdata=true"></iframe>
        </v-content>   
    </v-app>
</template>

<script>
import VueFrame from 'vue-frame'

export default {
    name: 'Survey',
    components: { VueFrame },
    methods: {
        onDone: function () {
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.frame {
    width: 100%;
    height: 100%;
}
</style>
